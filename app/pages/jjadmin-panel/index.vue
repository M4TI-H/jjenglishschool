<script setup lang="ts">
const supabase = useSupabaseClient();
definePageMeta({
  middleware: "auth",
});

const displayedForm = ref<string>("kontakt");
const loading = ref<boolean>(false);

const handleLogout = async () => {
  loading.value = true;
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }
  loading.value = false;
  navigateTo("/jjadmin");
};
</script>

<template>
  <main
    class="fixed w-screen min-h-screen flex flex-col items-center pb-4 py-8 bg-[#D9D9D9]"
  >
    <div class="w-full lg:w-[50%] flex items-center justify-between mb-8">
      <NuxtLink
        to="/"
        class="min-w-[6em] lg:w-[8rem] h-10 bg-[#eee] rounded-lg hover:cursor-pointer hover:bg-[#ccc] active:bg-[#ccc] flex items-center justify-center"
      >
        <p>Strona główna</p>
      </NuxtLink>
      <p class="text-[#444] text-2xl font-bold">Panel administratora</p>
      <button
        @click="handleLogout"
        v-if="!loading"
        class="min-w-[6em] lg:w-[8rem] h-10 bg-[#eee] rounded-lg hover:cursor-pointer hover:bg-[#ccc] active:bg-[#ccc]"
      >
        Wyloguj
      </button>
      <button
        @click="handleLogout"
        v-if="loading"
        class="min-w-[6em] lg:w-[8rem] h-10 bg-[#eee]/70 rounded-lg"
      >
        <i class="pi pi-spinner pi-spin"></i>
      </button>
    </div>
    <section
      class="w-full lg:w-[80%] h-[80%] max-w-[90rem] flex flex-col lg:flex-row bg-[#999] rounded-2xl"
    >
      <div class="w-full lg:w-[16rem] lg:flex-shrink-0 flex lg:flex-col">
        <button
          @click="displayedForm = 'kontakt'"
          :class="
            displayedForm === 'kontakt'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="pi pi-phone text-xl text-[#444]"
          ></i>
          <p
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Dane kontaktowe
          </p>
        </button>

        <button
          @click="displayedForm = 'oferta'"
          :class="
            displayedForm === 'oferta'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="pi pi-tag text-xl"
          ></i>
          <p
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Oferta i cennik
          </p>
        </button>

        <button
          @click="displayedForm = 'content'"
          :class="
            displayedForm === 'content'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="pi pi-bars text-2xl text-[#444]"
          ></i>
          <p
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Zawartość strony
          </p>
        </button>
      </div>
      <div
        class="w-full max-h-[48rem] flex flex-col bg-[#eee] lg:rounded-r-2xl"
      >
        <PanelContact v-if="displayedForm === 'kontakt'" />
        <PanelOferta v-if="displayedForm === 'oferta'" />
        <PanelZawartosc v-if="displayedForm === 'content'" />
      </div>
    </section>
  </main>
</template>
