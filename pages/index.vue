<script setup lang="ts">
import Contacts from "~/components/main/contacts.vue";
import MakeAppointment from "~/components/main/makeAppointment.vue";

useHead({
  title: "JJ English School | Lekcje angielskiego",
  meta: [
    {
      name: "description",
      content:
        "JJ English School | skuteczne lekcje angielskiego online i w Trójmieście. Indywidualne podejście, przygotowanie do egzaminów i swobodne konwersacje.",
    },
  ],
});
</script>

<template>
  <HamburgerMenu />
  <NavMenu />
  <ScrollToTop />

  <main class="min-h-screen flex flex-col items-center bg-[#0e121e]">
    <Hero id="start" />
    <Description />

    <!-- <MainTitlePanel /> -->

    <MainCustomContent id="omnie" />
    <MainCatalogue id="oferta" />
    <Contacts id="kontakt" />
    <MakeAppointment id="zapiszsie" />
  </main>
  <Footer />
</template>
