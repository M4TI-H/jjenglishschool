<script setup lang="ts">
const { activeLessonsData, fetchActiveLessons } = useLessons();

// onMounted(async () => {
await fetchActiveLessons();
// });
</script>

<template>
  <section class="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 mb-16">
    <div class="px-4 md:px-6">
      <h2 class="text-3xl text-[#DECFA7] font-extrabold mb-4">Oferta</h2>
    </div>
    <div
      class="w-full px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
    >
      <div
        v-for="(oferta, id) in activeLessonsData"
        :key="id"
        class="bg-black/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 border border-blue-600/60"
      >
        <p class="text-xl text-[#DECFA7] font-semibold mb-2">
          {{ oferta.name }}
        </p>
        <p class="text-lg text-blue-400 font-bold mb-4">
          {{ oferta.price }} zł
        </p>
        <NuxtLink
          to="/#kontakt"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-200 mt-auto"
          >Zapisz się</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
