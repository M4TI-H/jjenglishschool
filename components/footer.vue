<script setup lang="ts">
import { NuxtLink } from "#components";

const { contactData } = useContactData();
const { socialsData } = useSocialsData();
</script>

<template>
  <footer
    class="bottom-0 bg-[#07080E] w-full h-36 md:h-44 p-4 sm:px-[10%] flex"
  >
    <div
      class="w-[50%] m:w-[50%] h-full flex flex-col items-start md:items-center gap-2"
    >
      <NuxtLink
        to="/"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Strona główna</p></NuxtLink
      >
      <NuxtLink
        to="/#oferta"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Oferta</p></NuxtLink
      >
      <NuxtLink
        to="/#omnie"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>O mnie</p></NuxtLink
      >
      <NuxtLink
        to="/#kontakt"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Kontakt</p></NuxtLink
      >
    </div>
    <div
      class="w-[50%] md:w-[50%] h-full flex flex-col items-end md:items-center gap-4"
    >
      <span v-if="contactData?.phone_number" class="flex items-center gap-2">
        <i class="pi pi-phone text-[#273153] text-md"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          {{ contactData.phone_number }}
        </p>
      </span>

      <span v-if="contactData?.email" class="flex items-center gap-2">
        <i class="pi pi-envelope text-[#273153] text-md"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          {{ contactData.email }}
        </p>
      </span>

      <span class="flex items-center gap-4 md:gap-8">
        <NuxtLink
          v-for="social in socialsData?.filter((s) => s.link)"
          :key="social.id"
          :to="social.link"
          class="hover:cursor-pointer"
        >
          <i
            :class="[
              `pi pi-${social.platform}`,
              'text-2xl text-[#273153] hover:text-[#485B99] active:text-[#485B99]',
            ]"
          />
        </NuxtLink>
      </span>
    </div>
  </footer>
</template>
