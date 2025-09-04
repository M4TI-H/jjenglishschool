<script setup lang="ts"></script>

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

    <section class="w-full h-72 text-center">Tu będzie mapka</section>
    <MainCustomContent id="omnie" />
    <MainCatalogue id="oferta" />
  </main>
  <Footer />
</template>
