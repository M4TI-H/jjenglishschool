<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
const supabase = useSupabaseClient();
const loading = ref<boolean>(false);

const validationSchema = toTypedSchema(
  z.object({
    login: z.string(),
    password: z.string().min(1, "Hasło jest wymagane!"),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    login: "",
    password: "",
  },
});

const { value: login, errorMessage: loginError } = useField<string>("login");
const { value: password, errorMessage: passwordError } =
  useField<string>("password");

const handleLogin = async () => {
  loading.value = true;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: login.value.trim(),
      password: password.value,
    });
    loading.value = false;

    if (error) {
      alert("Błąd logowania: " + error.message);
    }

    if (data.user) {
      navigateTo("/jjadmin-panel");
    }
  } catch (error: any) {
    console.error(error);
    loading.value = false;
  }
};

const onSubmit = handleSubmit(handleLogin);
</script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center justify-center pb-4 py-8 bg-[#1A2137]"
  >
    <form
      @submit.prevent="onSubmit"
      class="bg-[#0e121e] w-[90%] md:max-w-[24rem] lg:max-w-[32rem] py-8 px-4 flex flex-col items-center rounded-xl gap-8"
    >
      <h2 class="text-[#DECFA7] text-3xl font-bold text-center">
        Panel administratora
      </h2>
      <img src="/logo.jpeg" class="w-[8rem]" />
      <div class="h-[5rem]">
        <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
          <i
            class="pi pi-user absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
          ></i>
          <input
            type="text"
            v-model="login"
            placeholder="Login"
            class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
          />
        </div>
        <p v-if="loginError" class="text-red-500 text-sm sm:text-md ml-2 mt-2">
          {{ loginError }}
        </p>
      </div>
      <div class="flex flex-col h-[5rem]">
        <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
          <i
            class="pi pi-lock absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
          ></i>
          <input
            type="password"
            v-model="password"
            placeholder="Hasło"
            class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
          />
        </div>
        <NuxtLink
          to="/jjadmin/change-password"
          class="mt-1 text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer hover:underline active:text-[#485B99] self-end"
        >
          Zmień hasło
        </NuxtLink>
        <p
          v-if="password"
          class="h-[1rem] text-red-500 text-sm sm:text-md ml-2 mt-2"
        >
          {{ passwordError }}
        </p>
      </div>

      <button
        v-if="!loading && meta.valid"
        type="submit"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7] rounded-lg hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
      >
        Zaloguj
      </button>

      <button
        v-if="!loading && !meta.valid"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7]/70 rounded-lg"
      >
        Zaloguj
      </button>

      <button
        v-if="loading"
        class="min-w-[10em] lg:w-[12rem] h-12 bg-[#DECFA7]/70 rounded-lg"
      >
        <i class="pi pi-spinner pi-spin"></i>
      </button>
    </form>
  </main>
</template>
