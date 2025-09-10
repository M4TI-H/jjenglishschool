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

  <main class="min-h-screen flex flex-col items-center bg-black">
    <Hero />
    <Description />

    <!-- <MainTitlePanel /> -->

    <MainCustomContent id="omnie" />
    <MainCatalogue id="oferta" />
  </main>
  <Footer />
</template>
