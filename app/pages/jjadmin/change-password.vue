<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
const supabase = useSupabaseClient();
const loading = ref<boolean>(false);

const validationSchema = toTypedSchema(
  z.object({
    login: z.string(),
    oldPassword: z.string().min(1, "Hasło jest wymagane!"),
    newPassword: z.string().min(6, "Hasło musi mieć conamniej 6 znaków!"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    login: "",
    oldPassword: "",
    newPassword: "",
  },
});

const { value: login, errorMessage: loginError } = useField<string>("login");
const { value: oldPassword, errorMessage: oldPasswordError } =
  useField<string>("oldPassword");
const { value: newPassword, errorMessage: newPasswordError } =
  useField<string>("newPassword");

const handlePasswordChange = async () => {
  loading.value = true;

  const { error: authDataError } = await supabase.auth.signInWithPassword({
    email: login.value,
    password: oldPassword.value,
  });

  if (authDataError) {
    alert("Niepoprawny login lub hasło!");
    loading.value = false;
    return;
  }

  const { error: updateError } = await supabase.auth.updateUser({
    password: newPassword.value,
  });

  if (updateError) {
    alert("Błąd przy zmianie hasła: " + updateError.message);
    loading.value = false;
    return;
  }

  alert("Hasło zostało zaktualizowane.");
  navigateTo("/jjadmin");
  loading.value = false;
  try {
  } catch (error: any) {
    console.error = error;
    loading.value = false;
  }
};

const onSubmit = handleSubmit(handlePasswordChange);
</script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center justify-center pb-4 py-8 bg-[#1A2137]"
  >
    <form
      @submit.prevent="onSubmit"
      class="relative bg-[#0e121e] w-[90%] md:max-w-[24rem] lg:max-w-[32rem] py-8 px-4 flex flex-col items-center rounded-xl gap-8"
    >
      <h1 class="text-[#DECFA7] text-3xl font-bold">Zmień hasło</h1>
      <img src="/logo.jpeg" class="w-[8rem]" />
      <div class="flex flex-col gap-8">
        <div class="h-[5rem]">
          <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
            <i
              class="pi pi-user absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
            ></i>
            <input
              name="login"
              type="text"
              v-model="login"
              placeholder="Twój login"
              class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
            />
          </div>
          <p
            v-if="loginError"
            class="text-red-500 text-sm sm:text-md ml-2 mt-2"
          >
            {{ loginError }}
          </p>
        </div>
        <div class="h-[5rem]">
          <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
            <i
              class="pi pi-lock-open absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
            ></i>
            <input
              name="oldPassword"
              type="text"
              v-model="oldPassword"
              placeholder="Obecne hasło"
              class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
            />
          </div>
          <p
            v-if="oldPasswordError"
            class="text-red-500 text-sm sm:text-md ml-2 mt-2"
          >
            {{ oldPasswordError }}
          </p>
        </div>
        <div class="h-[5rem]">
          <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
            <i
              class="pi pi-lock absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
            ></i>
            <input
              name="newPassword"
              type="password"
              v-model="newPassword"
              placeholder="Nowe hasło"
              class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
            />
          </div>
          <p
            v-if="newPasswordError"
            class="h-[1rem] text-red-500 text-sm sm:text-md ml-2 mt-2"
          >
            {{ newPasswordError }}
          </p>
        </div>
      </div>

      <button
        v-if="!loading && meta.valid"
        type="submit"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7] rounded-lg hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
      >
        Potwierdź
      </button>

      <button
        v-if="!loading && !meta.valid"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7]/70 rounded-lg"
      >
        Potwierdź
      </button>

      <button
        v-if="loading"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7]/70 rounded-lg"
      >
        <i class="pi pi-spinner pi-spin"></i>
      </button>
      <NuxtLink
        to="/jjadmin"
        class="absolute top-8 left-8 text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer hover:underline active:text-[#485B99]"
        >Cofnij</NuxtLink
      >
    </form>
  </main>
</template>
