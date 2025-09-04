<script setup lang="ts">
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
  <HamburgerMenu />
  <NavMenu />
  <ScrollToTop />
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137]"
  >
    <h2 class="text-3xl md:text-4xl text-[#DECFA7] font-semibold mb-8 md:mb-16">
      Kontakt
    </h2>
    <p class="text-[#DECFA7] w-[90%] max-w-[60rem] text-center mb-8 md:mb-16">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus
      auctor velit, tempus lobortis purus ultricies lacinia. In tincidunt ligula
      vel sem aliquet aliquet eget sit amet turpis. Nullam gravida tortor
      lectus, a feugiat velit vestibulum vitae. Aenean id diam sed mi finibus
      blandit vitae a nunc.
    </p>
    <section
      class="max-w-[72rem] w-full p-4 flex flex-col md:flex-row gap-12 md:gap-0"
    >
      <div class="w-full md:w-[50%] flex flex-col items-center">
        <h2 class="text-3xl text-[#DECFA7] text-center font-semibold mb-6">
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
        <h2 class="text-3xl text-[#DECFA7] text-center font-semibold mb-6">
          Obserwuj mnie
        </h2>
        <div class="max-w-[40rem] w-full flex flex-col items-center gap-8">
          <NuxtLink
            v-for="(socialMedia, id) in socialMediaData"
            :key="id"
            :to="socialMedia.link"
            class="hover:cursor-pointer flex items-center gap-2"
          >
            <i
              :class="[
                `pi pi-${socialMedia.platform}`,
                'text-[#DECFA7] text-xl',
              ]"
            />
            <p class="text-[#DECFA7] text-lg font-semibold">
              {{ socialMedia.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
