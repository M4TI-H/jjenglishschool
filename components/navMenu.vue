<script setup lang="ts"></script>

<template>
  <header
    class="hidden md:flex sticky w-full justify-between items-center h-24 bg-[#1E2137] px-8"
  >
    <div class="h-full flex items-center gap-16">
      <NuxtLink to="/" class="h-[80%]">
        <img class="h-full hover:cursor-pointer" src="/logo.png" alt="Logo" />
      </NuxtLink>

      <NuxtLink
        to="/#omnie"
        class="w-[7rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>O mnie</p></NuxtLink
      >

      <NuxtLink
        to="/#oferta"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>Oferta</p></NuxtLink
      >

      <NuxtLink
        to="/#kontakt"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>Kontakt</p></NuxtLink
      >

      <NuxtLink
        to="/#zapiszsie"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>Zapisz się</p></NuxtLink
      >
    </div>
  </header>
</template>
