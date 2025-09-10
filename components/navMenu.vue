<script setup lang="ts"></script>

<template>
  <header
    class="hidden md:flex sticky w-full justify-between items-center h-24 bg-[#0e121e] px-8"
  >
    <div class="h-full flex items-center gap-16">
      <NuxtLink to="/">
        <img
          class="h-full w-22 hover:cursor-pointer"
          src="/logo.png"
          alt="Logo"
        />
      </NuxtLink>

      <NuxtLink
        to="/#oferta"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>Oferta</p></NuxtLink
      >

      <NuxtLink
        to="/#omnie"
        class="w-[7rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>O mnie</p></NuxtLink
      >

      <NuxtLink
        to="/#kontakt"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center transition duration-150 ease-in-out"
        ><p>Kontakt</p></NuxtLink
      >
    </div>
    <NuxtLink
      to="/#kontakt"
      class="flex items-center justify-center min-w-[10em] lg:w-[12rem] lg:text-md h-12 bg-[#DECFA7] rounded-lg hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A] transition duration-150 ease-in-out"
    >
      <p>Umów się na zajęcia</p>
    </NuxtLink>
  </header>
</template>
