<script setup lang="ts">
const { activeLessonsData } = useActiveLessons();
</script>

<template>
  <section
    class="relative flex flex-col items-center w-full max-w-5xl mx-auto mt-12 md:mt-16 mb-16"
  >
    <h2 class="text-3xl md:text-4xl text-[#DECFA7] font-semibold mb-8 md:mb-16">
      Oferta
    </h2>
    <div
      class="w-full px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
    >
      <div
        v-for="(oferta, id) in activeLessonsData"
        :key="id"
        class="bg-[#1E2137]/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 border-1 border-[#445688]"
      >
        <p class="text-xl text-[#DECFA7] font-semibold mb-2">
          {{ oferta.name }}
        </p>
        <p class="text-sm text-[#DECFA7] mb-2">
          {{ oferta.description }}
        </p>
        <div class="w-full flex items-center justify-between mt-4">
          <p class="text-lg text-[#445688] font-bold">
            {{ oferta.price }} zł | {{ oferta.duration }}
          </p>
          <NuxtLink
            to="/#zapiszsie"
            class="inline-block py-2 px-6 rounded-lg shadow mt-auto self-end bg-[#DECFA7] hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A] transition-all duration-150 ease-in-out"
            >Zapisz się</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
