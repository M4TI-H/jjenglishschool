<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpened = ref<boolean>(false);

function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value
}
</script>

<template>
  <div class="fixed md:hidden bottom-5 right-5 flex flex-col items-end gap-2">
    <div v-if="isMenuOpened" class="flex flex-col mr-8 bg-[#3C3D3E] rounded-l-2xl rounded-tr-2xl">
      <button class="w-48 h-18 flex justify-evenly items-center active:bg-[#28292A] rounded-t-2xl hover:cursor-pointer 
        text-[#FBFFF1] active:text-[#FEAD34] hover:bg-[#28292A] font-semibold text-lg"
      >
        <i class="pi pi-home text-xl"></i>
        <span class="w-28">Oferta</span>
      </button>
      <button class="w-48 h-18 flex justify-evenly items-center active:bg-[#28292A] hover:cursor-pointer 
        text-[#FBFFF1] active:text-[#FEAD34] hover:bg-[#28292A] font-semibold text-lg"
      >
        <i class="pi pi-calendar text-xl"></i>
        <span class="w-28">Umówmy się</span>
      </button>
      <button class="w-48 h-18 flex justify-evenly items-center active:bg-[#28292A] rounded-bl-2xl hover:cursor-pointer 
        text-[#FBFFF1] active:text-[#FEAD34] hover:bg-[#28292A] font-semibold text-lg"
      >
        <i class="pi pi-phone text-xl"></i>
        <span class="w-28">Kontakt</span>
      </button>
    </div>

    <button @click="toggleMenu"
      class="flex size-[3rem] items-center justify-center rounded-full bg-[#FEAD34] active:bg-[#FEAD34]/70">
      <i class="pi pi-bars text-3xl text-[#000814] "></i>
    </button>

    <button class="flex size-[3rem] items-center justify-center rounded-full bg-[#FEAD34] active:bg-[#FEAD34]/70">
      <i class="pi pi-arrow-up text-xl text-[#000814] "></i>
    </button>
  </div>
</template>