<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const emit = defineEmits<{
  (e: "close"): void;
  (e: "refresh"): void;
}>();

const { loading, postNewCustomElement } = useContent();

const validationSchema = toTypedSchema(
  z.object({
    header: z.string().min(1, "Pole jest wymagane!"),
    paragraph: z.string().min(1, "Pole jest wymagane!"),
    imageUrl: z
      .string()
      .min(1, "Pole jest wymagane!")
      .url("Podaj poprawny link"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    header: "",
    paragraph: "",
    imageUrl: "",
  },
});

const { value: header, errorMessage: headerError } = useField<string>("header");
const { value: paragraph, errorMessage: paragraphError } =
  useField<string>("paragraph");
const { value: imageUrl, errorMessage: imageUrlError } =
  useField<string>("imageUrl");

const imageName = computed(() => {
  if (!header.value) return "";

  return header.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
});

const handlePostElement = async () => {
  const newElementData = {
    id: 0,
    header: header.value.trim(),
    paragraph: paragraph.value.trim(),
    image_url: imageUrl.value.trim(),
    image_name: imageName.value,
  };

  await postNewCustomElement(newElementData);

  emit("refresh");
  emit("close");
};

const onSubmit = handleSubmit(handlePostElement);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <form
      @submit="onSubmit"
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <p class="text-xl">Nowy element strony</p>
      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-star text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Tytuł paragrafu</p>
        </span>
        <input
          type="text"
          v-model="header"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p v-if="headerError" class="h-[1rem] text-sm text-red-500 ml-2">
          {{ headerError }}
        </p>
      </div>

      <div class="w-full h-[14rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-align-center text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Treść</p>
        </span>
        <textarea
          type="text"
          v-model="paragraph"
          class="bg-[#eee] w-full h-[10rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] p-2 font-semibold resize-none"
        />
        <p v-if="paragraphError" class="h-[1rem] text-sm text-red-500 ml-2">
          {{ paragraphError }}
        </p>
      </div>

      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-image text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">URL obrazu</p>
        </span>
        <input
          type="text"
          v-model="imageUrl"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p v-if="imageUrlError" class="h-[1rem] text-sm text-red-500 ml-2">
          {{ imageUrlError }}
        </p>
      </div>

      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          @click="handlePostElement"
          v-if="!loading && meta.valid"
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Dodaj
        </button>
        <button
          v-if="!loading && !meta.valid"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          Dodaj
        </button>
        <button
          v-if="loading"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          <i class="pi pi-spinner pi-spin"></i>
        </button>
      </span>
    </form>
  </div>
</template>
