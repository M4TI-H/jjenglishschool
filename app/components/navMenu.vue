<script setup lang="ts"></script>

<template>
  <header
    class="hidden md:flex sticky w-full justify-between items-center h-24 bg-[#0e121e] px-8"
  >
    <div class="h-full flex items-center gap-16">
      <NuxtLink to="/">
        <img
          class="h-full w-22 hover:cursor-pointer"
          src="../public/logo.jpeg"
          alt="Logo"
        />
      </NuxtLink>

      <NuxtLink
        to="/oferta"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >Oferta</NuxtLink
      >

      <NuxtLink
        to="/#omnie"
        class="w-[7rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >O mnie</NuxtLink
      >

      <NuxtLink
        to="/kontakt"
        class="w-[4rem] lg:w-[8rem] text-[#DECFA7] text-sm lg:text-lg font-semibold hover:cursor-pointer hover:text-[#CDB67A] active:text-[#CDB67A] text-center"
        >Kontakt</NuxtLink
      >
    </div>
    <NuxtLink
      to="/umowsie"
      class="flex items-center justify-center min-w-[10em] lg:w-[12rem] lg:text-md h-12 bg-[#DECFA7] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
    >
      Umów się na zajęcia
    </NuxtLink>
  </header>
</template>
