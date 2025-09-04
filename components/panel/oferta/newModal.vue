<script setup lang="ts">
// @ts-ignore
import Cleave from "vue-cleave-component";
import type Lesson from "~/types/lesson";
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { loading, postNewLesson } = useLessons();

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "Pole jest wymagane!"),
    description: z.string().min(1, "Pole jest wymagane!"),
    price: z.coerce.number().min(1, "Pole jest wymagane!"),
    duration: z.string().min(1, "Pole jest wymagane!"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    name: "",
    description: "",
    price: 1,
    duration: "",
  },
});

const { value: name, errorMessage: nameError } = useField<string>("name");
const { value: description, errorMessage: descriptionError } =
  useField<string>("description");
const { value: price, errorMessage: priceError } = useField<string>("price");
const { value: duration, errorMessage: durationError } =
  useField<string>("duration");

const handleCreateNewLesson = async () => {
  const newLessonData = {
    id: 0,
    name: name.value,
    description: description.value,
    price: Number(price.value),
    duration: duration.value,
    isActive: true,
  };

  await postNewLesson(newLessonData);

  emit("close");
};

const onSubmit = handleSubmit(handleCreateNewLesson);
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <div
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <p class="text-xl">Nowa oferta</p>
      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-tag text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Nazwa oferty</p>
        </span>
        <input
          v-model="name"
          type="text"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p class="h-[1rem] text-sm text-red-500 ml-2">{{ nameError }}</p>
      </div>

      <div class="w-full h-[9rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-align-left text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Opis</p>
        </span>
        <textarea
          v-model="description"
          type="text"
          class="bg-[#eee] w-full h-[6rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] p-2 font-semibold resize-none"
        />
        <p class="h-[1rem] text-sm text-red-500 ml-2">{{ descriptionError }}</p>
      </div>

      <div
        class="w-full flex flex-col md:flex-row items-center justify-between gap-1"
      >
        <div class="w-full md:w-7/15 h-[6rem] flex flex-col gap-1">
          <span class="flex items-center gap-2 w-full">
            <i class="pi pi-money-bill text-lg text-[#777]"></i>
            <p class="text-sm text-[#777]">Koszt zajęć</p>
          </span>
          <Cleave
            v-model="price"
            :options="{
              numeral: true,
              numeralThousandsGroupStyle: 'none',
              numeralDecimalScale: 2,
              numeralPositiveOnly: true,
            }"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <p class="h-[1rem] text-sm text-red-500 ml-2">{{ priceError }}</p>
        </div>
        <div class="w-full md:w-7/15 h-[6rem] flex flex-col gap-1">
          <span class="flex items-center gap-2 w-full">
            <i class="pi pi-clock text-lg text-[#777]"></i>
            <p class="text-sm text-[#777]">Czas trwania</p>
          </span>
          <input
            v-model="duration"
            type="text"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <p class="h-[1rem] text-sm text-red-500 ml-2">
            {{ durationError }}
          </p>
        </div>
      </div>

      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          type="submit"
          @click="handleCreateNewLesson"
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
    </div>
  </form>
</template>
