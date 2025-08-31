<script setup lang="ts">
const contactData = {
  name_surname: "Jan Kowalski",
  email: "example.english@email.com",
  phone_number: "+48 123 456 789",
  facebook: "English Example",
  instagram: "english.example",
  linkedin: "Jan Kowalski",
};
</script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137]"
  >
    <h1 class="text-3xl md:text-4xl text-[#DECFA7] font-bold mb-8 md:mb-16">
      Kontakt
    </h1>

    <section
      class="max-w-[72rem] w-full p-4 flex flex-col md:flex-row gap-12 md:gap-0"
    >
      <div class="w-full md:w-[50%] flex flex-col items-center">
        <h2 class="text-3xl text-[#DECFA7] font-semibold mb-6">
          Skontaktuj się ze mną
        </h2>

        <div class="max-w-[40rem] w-full flex flex-col items-center gap-8">
          <span class="flex items-center gap-2">
            <i class="pi pi-user text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.name_surname }}
            </p>
          </span>

          <span class="flex items-center gap-2">
            <i class="pi pi-envelope text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.email }}
            </p>
          </span>

          <span class="flex items-center gap-2">
            <i class="pi pi-phone text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.phone_number }}
            </p>
          </span>
        </div>
      </div>

      <div class="w-full md:w-[50%] flex flex-col items-center">
        <h2 class="text-3xl text-[#DECFA7] font-semibold mb-6">
          Obserwuj mnie
        </h2>
        <div class="max-w-[40rem] w-full flex flex-col items-center gap-8">
          <span class="flex items-center gap-2">
            <i class="pi pi-facebook text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.facebook }}
            </p>
          </span>

          <span class="flex items-center gap-2">
            <i class="pi pi-instagram text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.instagram }}
            </p>
          </span>

          <span class="flex items-center gap-2">
            <i class="pi pi-linkedin text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.linkedin }}
            </p>
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
