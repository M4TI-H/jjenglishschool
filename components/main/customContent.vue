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
      class="w-full flex flex-col items-center md:items-start gap-6 bg-black/60 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-xl p-6 md:p-10 mb-4"
    >
      <div class="flex flex-col gap-4 w-full">
        <div class="flex items-center gap-4 mb-2">
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
          <h3
            class="flex-shrink-0 text-2xl md:text-3xl text-[#DECFA7] font-bold text-center md:text-left"
          >
            {{ text.header }}
          </h3>
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
        </div>
        <p class="text-[#DECFA7] text-base md:text-lg text-center md:text-left max-w-2xl">
          {{ text.paragraph }}
        </p>
      </div>
    </article>
  </section>
</template>
