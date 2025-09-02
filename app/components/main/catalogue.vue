<script setup lang="ts">
const oferty = [
  { name: "Godzina korepetycji angielskiego", price: 100 },
  { name: "Rozmowa", price: 80 },
  { name: "Rozwiązywanie zadań maturalnych", price: 100 },
  { name: "Powtórka do testu", price: 60 },
];
</script>

<template>
  <section
    class="w-full bg-[#0e121e] p-4 flex flex-col justify-center items-center gap-8"
  >
    <h2 class="text-3xl text-[#DECFA7] font-semibold">Oferta</h2>
    <div
      class="max-w-[60rem] w-full h-full border-3 border-[#DECFA7] border-dashed rounded-xl flex flex-col items-center p-2"
    >
      <div class="w-full flex flex-col gap-8 p-2">
        <span
          v-for="(oferta, id) in oferty"
          :key="id"
          class="w-full flex justify-between items-end"
        >
          <p class="text-lg text-[#DECFA7] max-w-[70%]">
            {{ oferta.name }}
          </p>
          <p class="text-lg text-[#DECFA7] font-semibold">
            {{ oferta.price }} zł
          </p>
        </span>
        <p class="text-lg text-[#DECFA7]">I więcej...</p>
      </div>
    </div>
    <NuxtLink
      to="/oferta"
      class="flex items-center justify-center min-w-[10em] lg:w-[12rem] lg:text-md h-12 bg-[#DECFA7] rounded-lg hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A] transition duration-150 ease-in-out"
    >
      <p>Poznaj szczegóły</p>
    </NuxtLink>
  </section>
</template>
