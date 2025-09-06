<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const validationSchema = toTypedSchema(
  z.object({
    name_surname: z.string().min(1, "*Pole jest wymagane!"),
    phone_number: z.string().min(1, "*Pole jest wymagane!"),
    email: z
      .string()
      .min(1, "*Pole jest wymagane!")
      .email("*Niepoprawny format"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    name_surname: "",
    phone_number: "",
    email: "",
  },
});

const { value: name_surname, errorMessage: nameError } =
  useField<string>("name_surname");
const { value: phone_number, errorMessage: phoneError } =
  useField<string>("phone_number");
const { value: email, errorMessage: emailError } = useField<string>("email");

const formatDate = (date: Date) => {
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });
};

const loading = ref<boolean>(false);
const handleSignUser = async () => {
  loading.value = true;
  const params = {
    name_surname: name_surname.value,
    phone_number: phone_number.value,
    email: email.value,
    time: formatDate(new Date()),
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      params
    );
    name_surname.value = "";
    phone_number.value = "";
    email.value = "";

    alert("Pomyślnie wysłano zgłoszenie!");
  } catch (error: any) {
    alert("Błąd przy wysyłaniu zgłoszenia! Spróbuj ponownie za chwilę.");
  }
  loading.value = false;
};

const onSubmit = handleSubmit(handleSignUser);
</script>

<template>
  <section class="w-full flex items-center justify-center mb-16">
    <form
      @submit="onSubmit"
      class="w-full md:w-[40%] bg-[#d9d9d9] rounded-lg flex flex-col items-center gap-6 px-8 py-12"
    >
      <span
        class="h-[4rem] w-full max-w-[35rem] bg-[#228ee3] flex items-center p-4 px-8 rounded-md"
      >
        <p class="text-xl md:text-2xl text-white">Zapisz się!</p>
      </span>
      <div class="w-full h-[7rem] flex flex-col items-center">
        <p class="text-sm self-start text-[#444] font-semibold ml-2 mb-2">
          Imię i nazwisko
        </p>
        <input
          type="text"
          v-model="name_surname"
          class="bg-[#eee] w-full h-[3rem] rounded-md outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p v-if="nameError" class="text-sm self-start text-red-500 ml-2 mt-2">
          {{ nameError }}
        </p>
      </div>

      <div class="w-full h-[7rem] flex flex-col items-center">
        <p class="text-sm self-start text-[#444] font-semibold ml-2 mb-2">
          Numer telefonu
        </p>
        <input
          type="text"
          v-model="phone_number"
          class="bg-[#eee] w-full h-[3rem] rounded-md outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p v-if="phoneError" class="text-sm self-start text-red-500 ml-2 mt-2">
          {{ phoneError }}
        </p>
      </div>

      <div class="w-full h-[7rem] flex flex-col items-center">
        <p class="text-sm self-start text-[#444] font-semibold ml-2 mb-2">
          Adres e-mail
        </p>
        <input
          type="text"
          v-model="email"
          class="bg-[#eee] w-full h-[3rem] rounded-md outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
        <p v-if="emailError" class="text-sm self-start text-red-500 ml-2 mt-2">
          {{ emailError }}
        </p>
      </div>

      <button
        v-if="!loading && meta.valid"
        type="submit"
        class="w-[16rem] h-[3rem] bg-[#228ee3] text-[#eee] rounded-md hover:bg-[#1968a5] hover:cursor-pointer active:bg-[#1968a5] self-end"
      >
        <span class="flex items-center justify-center gap-6">
          Wyślij zgłoszenie <i class="pi pi-angle-right text-lg"></i>
        </span>
      </button>
      <button
        v-if="!loading && !meta.valid"
        class="w-[16rem] h-[3rem] bg-[#228ee3]/30 text-[#eee] rounded-md self-end"
      >
        <span class="flex items-center justify-center gap-6">
          Wyślij zgłoszenie <i class="pi pi-angle-right text-lg"></i>
        </span>
      </button>
      <button
        v-if="loading"
        class="w-[16rem] h-[3rem] bg-[#228ee3]/30 text-[#eee] rounded-md self-end"
      >
        <i class="pi pi-spinner pi-spin"></i>
      </button>
    </form>
  </section>
</template>
