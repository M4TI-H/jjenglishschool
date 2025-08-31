<script setup lang="ts"></script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center bg-[#1A2137]"
  >
    <!-- Header with title -->
    <TitlePanel />

    <!-- Short text -->
    <MainDescriptionContent />

    <section class="w-full h-72 text-center">Tu będzie mapka</section>
    <CustomContent id="content" />
    <Catalogue id="oferta" />
    <Contacts id="kontakt" />
  </main>
</template>
