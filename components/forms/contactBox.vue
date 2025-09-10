<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

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

  const { error } = await fetchData<null>("/api/send_email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (error) {
    alert("Nastąpił błąd przy wysyłąniu zgłoszenia. Spróbuj ponownie!");
  } else {
    name_surname.value = "";
    phone_number.value = "";
    email.value = "";
    alert("Pomyślnie wysłano zgłoszenie!");
  }

  loading.value = false;
};

const onSubmit = handleSubmit(handleSignUser);
</script>

<template>
  <section class="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 mb-16">
    <div class="px-4 md:px-6">
      <h2 class="text-3xl text-[#DECFA7] font-extrabold mb-4">Kontakt</h2>
    </div>
    <form
      @submit="onSubmit"
      class="mx-4 md:mx-6 bg-black/60 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-xl w-auto max-w-full md:max-w-3xl p-6 md:p-10"
    >
      <div class="grid grid-cols-1 gap-6">
        <div>
          <label class="block text-sm text-[#DECFA7] font-semibold mb-2"
            >Imię i nazwisko</label
          >
          <input
            type="text"
            v-model="name_surname"
            class="w-full h-12 rounded-md bg-white/5 text-[#DECFA7] placeholder-white/50 border border-white/10 focus:border-blue-500 focus:outline-none px-3"
            placeholder="Jan Kowalski"
          />
          <p v-if="nameError" class="text-sm text-red-400 mt-2">
            {{ nameError }}
          </p>
        </div>

        <div>
          <label class="block text-sm text-[#DECFA7] font-semibold mb-2"
            >Numer telefonu</label
          >
          <input
            type="text"
            v-model="phone_number"
            class="w-full h-12 rounded-md bg-white/5 text-[#DECFA7] placeholder-white/50 border border-white/10 focus:border-blue-500 focus:outline-none px-3"
            placeholder="123 456 789"
          />
          <p v-if="phoneError" class="text-sm text-red-400 mt-2">
            {{ phoneError }}
          </p>
        </div>

        <div>
          <label class="block text-sm text-[#DECFA7] font-semibold mb-2"
            >Adres e-mail</label
          >
          <input
            type="email"
            v-model="email"
            class="w-full h-12 rounded-md bg-white/5 text-[#DECFA7] placeholder-white/50 border border-white/10 focus:border-blue-500 focus:outline-none px-3"
            placeholder="jan@przyklad.pl"
          />
          <p v-if="emailError" class="text-sm text-red-400 mt-2">
            {{ emailError }}
          </p>
        </div>
      </div>

      <div class="mt-8 flex justify-end">
        <button
          v-if="!loading && meta.valid"
          type="submit"
          class="inline-flex items-center justify-center min-w-[12rem] h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors"
        >
          <span class="flex items-center gap-2">
            Wyślij zgłoszenie <i class="pi pi-angle-right text-lg"></i>
          </span>
        </button>
        <button
          v-else-if="!loading && !meta.valid"
          class="inline-flex items-center justify-center min-w-[12rem] h-12 bg-blue-600/40 text-white/80 font-semibold rounded-lg cursor-not-allowed"
          type="button"
        >
          <span class="flex items-center gap-2">
            Wyślij zgłoszenie <i class="pi pi-angle-right text-lg"></i>
          </span>
        </button>
        <button
          v-else
          class="inline-flex items-center justify-center min-w-[12rem] h-12 bg-blue-600/40 text-white font-semibold rounded-lg"
          type="button"
        >
          <i class="pi pi-spinner pi-spin"></i>
        </button>
      </div>
    </form>
  </section>
</template>
