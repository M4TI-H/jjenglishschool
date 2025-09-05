<script setup lang="ts">
const { contactData, socialsData, fetchContactData, fetchSocialMediaData } =
  useContact();

onMounted(async () => {
  await fetchContactData();
  await fetchSocialMediaData();
});
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
    <p
      class="md:text-lg text-[#DECFA7] w-[90%] max-w-[60rem] text-center mb-8 md:mb-16"
    >
      Masz pytania dotyczące zajęć, chcesz umówić lekcję próbną lub potrzebujesz
      indywidualnego planu nauki? Nie czekaj! Skontaktuj się ze mną, a odpowiem
      na wszystkie Twoje wątpliwości i pomogę znaleźć najlepsze rozwiązanie dla
      Ciebie.
      <br />
      <br />
      Możesz napisać wiadomość przez formularz, zadzwonić lub wysłać e-mail.
      Każda wiadomość jest dla mnie ważna i odpowiadam możliwie najszybciej.
    </p>
    <section
      class="max-w-[72rem] w-full p-4 flex flex-col md:flex-row gap-12 md:gap-0"
    >
      <div class="w-full md:w-[50%] flex flex-col items-center">
        <h2 class="text-3xl text-[#DECFA7] text-center font-semibold mb-6">
          Skontaktuj się ze mną
        </h2>

        <div class="max-w-[40rem] w-full flex flex-col items-center gap-8">
          <span
            v-if="contactData?.name_surname"
            class="flex items-center gap-2"
          >
            <i class="pi pi-user text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.name_surname }}
            </p>
          </span>

          <span v-if="contactData?.email" class="flex items-center gap-2">
            <i class="pi pi-envelope text-[#DECFA7] text-xl"></i>
            <p class="text-lg text-[#DECFA7] font-semibold">
              {{ contactData.email }}
            </p>
          </span>

          <span
            v-if="contactData?.phone_number"
            class="flex items-center gap-2"
          >
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
            v-for="social in socialsData?.filter((s) => s.username)"
            :key="social.id"
            :to="social.link"
            class="hover:cursor-pointer flex items-center gap-2"
          >
            <i
              :class="[`pi pi-${social.platform}`, 'text-[#DECFA7] text-xl']"
            />
            <p class="text-[#DECFA7] text-lg font-semibold">
              {{ social.username }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
