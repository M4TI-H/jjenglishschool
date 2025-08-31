<script setup lang="ts">
import { PanelContactSocialModal } from "#components";

const contactData = {
  name_surname: "Jan Kowalski",
  email: "example.english@email.com",
  phone_number: "+48 123 456 789",
  facebook: "English Example",
  instagram: "english.example",
  linkedin: "Jan Kowalski",
  youtube: null,
  twitter: null,
};

const displayContactDataForm = ref<boolean>(false);
const toggleDisplayContact = () => {
  displayContactDataForm.value = !displayContactDataForm.value;
};

const displaySocialDataForm = ref<boolean>(false);
const toggleDisplaySocial = () => {
  displaySocialDataForm.value = !displaySocialDataForm.value;
};
</script>

<template>
  <section class="w-full flex flex-col items-center p-4 gap-4 overflow-y-auto">
    <PanelContactDataModal
      v-if="displayContactDataForm"
      :data="contactData"
      @close="toggleDisplayContact"
    />

    <PanelContactSocialModal
      v-if="displaySocialDataForm"
      :data="contactData"
      @close="toggleDisplaySocial"
    />

    <h2 class="text-2xl font-semibold">Twoje dane kontaktowe</h2>
    <div class="w-full flex flex-col md:flex-row justify-center gap-8">
      <div
        class="relative w-full md:w-1/2 max-w-[36rem] flex flex-col gap-2 p-4 md:bg-[#D9D9D9] md:rounded-lg"
      >
        <h3 class="text-xl font-semibold text-[#444]">Dane osobiste</h3>
        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-user md:text-lg text-[#777]"></i>
            <p class="md:text-lg text-[#777]">Imię i nazwisko</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.name_surname ? contactData.name_surname : "-" }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-phone md:text-lg text-[#777]"></i>
            <p class="md:text-lg text-[#777]">Numer telefonu</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.phone_number ? contactData.phone_number : "-" }}
          </p>
        </div>
        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-envelope md:text-lg text-[#777]"></i>
            <p class="md:text-lg text-[#777]">E-mail</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.email ? contactData.email : "-" }}
          </p>
        </div>
        <button
          @click="toggleDisplayContact"
          class="md:absolute md:bottom-4 md:right-4 w-[10rem] h-[2.5rem] text-[#444] font-semibold mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
        >
          Edytuj sekcję
        </button>
      </div>
      <div
        class="relative w-full md:w-1/2 max-w-[36rem] flex flex-col gap-2 p-4 md:bg-[#D9D9D9] md:rounded-lg"
      >
        <h3 class="text-xl font-semibold text-[#444]">Konta społecznościowe</h3>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-facebook text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Facebook:</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.facebook ? contactData.facebook : "-" }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-instagram text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Instagram:</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.instagram ? contactData.instagram : "-" }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-linkedin text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Linkedin:</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.linkedin ? contactData.linkedin : "-" }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-youtube text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">YouTube:</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.youtube ? contactData.youtube : "-" }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <span class="flex items-center gap-2">
            <i class="pi pi-twitter text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Twitter / X:</p>
          </span>
          <p class="text-lg font-semibold ml-2">
            {{ contactData.twitter ? contactData.twitter : "-" }}
          </p>
        </div>
        <button
          @click="toggleDisplaySocial"
          class="md:absolute md:bottom-4 md:right-4 w-[10rem] h-[2.5rem] text-[#444] font-semibold mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
        >
          Edytuj sekcję
        </button>
      </div>
    </div>
  </section>
</template>
