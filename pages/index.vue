<script setup lang="ts">
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
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center bg-[#1A2137]"
  >
    <!-- Header with title -->
    <MainTitlePanel />

    <!-- Short text -->
    <MainDescriptionContent />

    <MainCustomContent id="omnie" />
    <MainCatalogue id="oferta" />
  </main>
  <Footer />
</template>
