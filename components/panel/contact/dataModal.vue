<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const emit = defineEmits<{
  (e: "close"): void;
  (e: "refresh"): void;
}>();

const { data } = defineProps<{
  data: any;
}>();

const { loading, editContactData } = useContact();

const validationSchema = toTypedSchema(
  z.object({
    name_surname: z.string().min(1, "Pole jest wymagane!"),
    phone_number: z.string().min(1, "Pole jest wymagane!"),
    email: z.string().min(1, "Pole jest wymagane!"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    name_surname: data?.name_surname ?? "",
    phone_number: data?.phone_number ?? "",
    email: data?.email ?? "",
  },
});

const { value: name_surname, errorMessage: nameError } =
  useField<string>("name_surname");
const { value: phone_number, errorMessage: phoneError } =
  useField<string>("phone_number");
const { value: email, errorMessage: emailError } = useField<string>("email");

const handleLessonEdit = async () => {
  const newContactsData = {
    id: 0,
    name_surname: name_surname.value,
    phone_number: phone_number.value,
    email: email.value,
  };

  await editContactData(newContactsData);

  emit("refresh");
  emit("close");
};

const onSubmit = handleSubmit(handleLessonEdit);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <form
      @submit="onSubmit"
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <p class="text-xl">Zmiana danych kontaktowych</p>
      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-user md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">Imię i nazwisko</p>
        </span>
        <input
          type="text"
          v-model="name_surname"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p class="h-[1rem] text-sm text-red-500 ml-2">{{ nameError }}</p>
      </div>

      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-phone md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">Numer telefonu</p>
        </span>
        <input
          type="text"
          v-model="phone_number"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p class="h-[1rem] text-sm text-red-500 ml-2">{{ nameError }}</p>
      </div>

      <div class="w-full h-[6rem] flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-envelope md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">E-mail</p>
        </span>
        <input
          type="text"
          v-model="email"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p class="h-[1rem] text-sm text-red-500 ml-2">{{ nameError }}</p>
      </div>
      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          v-if="!loading && meta.valid"
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Potwierdź
        </button>
        <button
          v-if="!loading && !meta.valid"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          Potwierdź
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
