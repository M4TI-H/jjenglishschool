<script setup lang="ts">
const { customContentData, fetchCustomContentData } = useContent();

onMounted(async () => {
  await fetchCustomContentData();
});
</script>

<template>
  <section class="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 mb-16">
    <div class="px-4 md:px-6">
      <h2 class="text-3xl text-[#DECFA7] font-extrabold mb-4">O mnie</h2>
    </div>
    <article
      v-for="text in customContentData"
      :key="text.id"
      class="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 bg-black/60 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-xl p-6 md:p-10 mb-4"
    >
      <div class="flex flex-col gap-4 flex-1">
        <div class="flex items-center gap-4 mb-2">
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
          <h3
            class="flex-shrink-0 text-2xl md:text-3xl text-[#DECFA7] font-bold text-center md:text-left"
          >
            {{ text.header }}
          </h3>
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
        </div>
        <p
          class="text-[#DECFA7] text-lg md:text-xl text-center md:text-left max-w-2xl"
        >
          {{ text.paragraph }}
        </p>
      </div>
      <div
        class="w-64 h-48 md:w-80 md:h-56 xl:w-96 xl:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600 bg-[#1A2137] flex-shrink-0"
      >
        <img
          :src="text.image_url"
          :alt="text.image_name"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </div>
    </article>
  </section>
</template>
