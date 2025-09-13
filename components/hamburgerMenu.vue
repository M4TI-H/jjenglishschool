<script setup lang="ts">
import { ref } from "vue";

const isMenuOpened = ref<boolean>(false);

function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value;
}
</script>

<template>
  <header
    class="w-full h-16 sticky md:hidden flex justify-between px-2 items-center bg-[#1E2137] z-50"
  >
    <div class="size-10"></div>
    <NuxtLink to="/" class="h-[80%]">
      <img class="h-full hover:cursor-pointer" src="/logo.png" alt="Logo" />
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
        to="/#oferta"
        class="w-full min-h-16 py-2 text-lg text-white active:bg-[#0e121e] flex items-center justify-center"
      >
        <p>Oferta</p>
      </NuxtLink>

      <NuxtLink
        to="/#omnie"
        class="w-full min-h-16 py-2 text-lg text-white active:bg-[#0e121e] flex items-center justify-center"
      >
        <p>O mnie</p>
      </NuxtLink>

      <NuxtLink
        to="/#kontakt"
        class="w-full min-h-16 py-2 text-lg text-white active:bg-[#0e121e] flex items-center justify-center"
      >
        <p>Kontakt</p>
      </NuxtLink>
      <NuxtLink
        to="/#zapiszsie"
        class="w-full min-h-16 py-2 text-lg text-white active:bg-[#0e121e] flex items-center justify-center"
      >
        <p>Zapisz się</p>
      </NuxtLink>
    </div>
    <div
      v-show="isMenuOpened"
      class="absolute top-0 left-0 w-full h-screen z-40"
      @click="isMenuOpened = false"
    ></div>
  </header>
</template>
