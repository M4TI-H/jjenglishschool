<script setup lang="ts"></script>

<template>
  <header
    class="hidden md:flex sticky w-full justify-between items-center h-24 bg-[#0e121e] px-8"
  >
    <div class="h-full flex items-center gap-16">
      <img
        @click="navigateTo('/')"
        src="../public/logo.jpeg"
        class="w-22 hover:cursor-pointer"
      />

      <a
        @click="navigateTo('/oferta')"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >Oferta</a
      >

      <a
        @click="navigateTo('/#content')"
        class="w-[7rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >O mnie</a
      >

      <a
        @click="navigateTo('/kontakt')"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >Kontakt</a
      >
    </div>
    <button
      @click="navigateTo('/umowsie')"
      class="min-w-[10em] lg:w-[12rem] lg:text-md h-12 bg-[#DECFA7] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
    >
      Umów się na zajęcia
    </button>
  </header>
</template>
