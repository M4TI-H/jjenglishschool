<script setup lang="ts">
import { ref } from "vue";

const isMenuOpened = ref<boolean>(false);

function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value;
}
</script>

<template>
  <header
    class="w-full h-16 sticky md:hidden flex justify-between pr-2 items-center bg-[#0e121e] z-30"
  >
    <NuxtLink to="/">
      <img
        class="h-full w-18 hover:cursor-pointer"
        src="../public/logo.jpeg"
        alt="Logo"
      />
    </NuxtLink>
    <button
      @click="toggleMenu"
      class="size-10 rounded-full active:bg-[#07080E]"
    >
      <i class="pi pi-bars text-white"></i>
    </button>

    <div
      v-show="isMenuOpened"
      class="absolute top-full left-0 w-full h-auto flex flex-col items-center bg-[#0e121e]/90 z-50 pointer-events-auto"
    >
      <NuxtLink
        to="/oferta"
        class="w-full min-h-16 py-2 text-lg text-white font-semibold active:bg-[#0e121e] flex items-center justify-center"
      >
        Oferta
      </NuxtLink>

      <NuxtLink
        to="/#omnie"
        class="w-full min-h-16 py-2 text-lg text-white font-semibold active:bg-[#0e121e] flex items-center justify-center"
      >
        O mnie
      </NuxtLink>

      <NuxtLink
        to="/kontakt"
        class="w-full min-h-16 py-2 text-lg text-white font-semibold active:bg-[#0e121e] flex items-center justify-center"
      >
        Kontakt
      </NuxtLink>

      <div class="min-h-16 py-2">
        <NuxtLink
          to="/umowsie"
          class="flex items-center justify-center w-44 lg:text-md h-10 bg-[#DECFA7] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
        >
          Zapisz się na zajęcia
        </NuxtLink>
      </div>
    </div>
    <div
      v-show="isMenuOpened"
      class="absolute top-0 left-0 w-full h-screen z-40"
      @click="isMenuOpened = false"
    ></div>
  </header>
</template>
