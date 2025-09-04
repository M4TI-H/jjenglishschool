<script setup lang="ts">
import { NuxtLink } from "#components";

const contactData = {
  name_surname: "Jan Kowalski",
  email: "example.english@email.com",
  phone_number: "+48 123 456 789",
};

const socialMediaData = [
  {
    platform: "facebook",
    name: "English Example",
    link: "https://www.facebook.com",
  },
  {
    platform: "instagram",
    name: "english.example",
    link: "https://www.instagram.com",
  },
  {
    platform: "linkedin",
    name: "Jan Kowalski",
    link: "https://www.linkedin.com",
  },
];
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
        to="/oferta"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Oferta</p></NuxtLink
      >
      <NuxtLink
        to="/kontakt"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Kontakt</p></NuxtLink
      >
      <NuxtLink
        to="/umowsie"
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        ><p>Umów się</p></NuxtLink
      >
    </div>
    <div
      class="w-[50%] md:w-[50%] h-full flex flex-col items-end md:items-center gap-4"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-phone text-[#273153] text-xs"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          {{ contactData.phone_number }}
        </p>
      </span>

      <span class="flex items-center gap-2">
        <i class="pi pi-envelope text-[#273153] text-xs"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          {{ contactData.email }}
        </p>
      </span>

      <span class="flex items-center gap-4 md:gap-8">
        <NuxtLink
          v-for="(socialMedia, id) in socialMediaData"
          :key="id"
          :to="socialMedia.link"
          class="hover:cursor-pointer"
        >
          <i
            :class="[
              `pi pi-${socialMedia.platform}`,
              'text-2xl text-[#273153] hover:text-[#485B99] active:text-[#485B99]',
            ]"
          />
        </NuxtLink>
      </span>
    </div>
  </footer>
</template>
