<script setup lang="ts">
useHead({
  title: "JJ English School | Oferta",
  meta: [
    {
      name: "description",
      content:
        "JJ English School | oferuję lekcje angielskiego online i stacjonarnie: konwersacje, przygotowanie do egzaminów, korepetycje dla dzieci i dorosłych, plan nauki dopasowany do Ciebie.",
    },
  ],
});

const { loading, activeLessonsData, fetchActiveLessons } = useLessons();

onMounted(async () => {
  await fetchActiveLessons();
});
</script>

<template>
  <HamburgerMenu />
  <NavMenu />
  <ScrollToTop />
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137] gap-8"
  >
    <h2 class="text-3xl md:text-4xl text-[#DECFA7] font-semibold">Oferta</h2>
    <div v-if="loading">
      <i class="pi pi-spin pi-spinner text-2xl text-[#DECFA7]"></i>
    </div>
    <div
      v-if="activeLessonsData.length > 0"
      class="max-w-[50rem] w-full flex flex-wrap justify-center gap-8 md:gap-16 p-4"
    >
      <div
        v-for="oferta in activeLessonsData"
        :key="oferta.id"
        class="max-w-[20rem] w-full flex flex-col"
      >
        <span
          class="w-full flex flex-col border-b-1 pb-2 border-b-[#DECFA7] gap-2"
        >
          <p class="md:text-xl text-[#DECFA7] font-semibold">
            {{ oferta.name }}
          </p>
          <p class="text-[#DECFA7]">
            {{ oferta.description }}
          </p>
        </span>

        <span class="w-full flex items-center justify-between py-2">
          <p class="text-xl md:text-2xl text-[#DECFA7] font-bold">
            {{ oferta.duration }}
          </p>
          <p class="text-xl md:text-2xl text-[#DECFA7] font-bold">
            {{ oferta.price }} zł
          </p>
        </span>
      </div>
    </div>
    <NuxtLink
      to="/umowsie"
      class="flex items-center justify-center min-w-[10em] lg:w-[12rem] lg:text-md h-12 mb-16 bg-[#DECFA7] rounded-lg hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A] transition duration-150 ease-in-out"
    >
      <p>Umów się na zajęcia</p>
    </NuxtLink>
  </main>
  <Footer />
</template>
