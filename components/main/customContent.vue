<script setup lang="ts">
const { customContentData } = useCustomData();
</script>

<template>
  <section class="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 mb-16">
    <article
      v-for="content in customContentData"
      :key="content.id"
      class="w-full flex flex-col items-center md:items-start gap-6 bg-[#1E2137]/60 backdrop-blur-sm rounded-2xl md:rounded-4xl shadow-xl p-6 md:p-10 mb-4"
    >
      <div class="flex flex-col gap-4 w-full">
        <img
          v-if="content.image_url"
          :src="content.image_url"
          :alt="content.image_name"
          class="self-center h-[12rem] md:h-[24rem] w-[20rem] md:max-w-[40rem] border-5 border-[#ccc]"
        />

        <div class="flex items-center gap-4 mb-2">
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
          <h3
            class="flex-shrink-0 text-2xl md:text-3xl text-[#DECFA7] font-bold text-center md:text-left"
          >
            {{ content.header }}
          </h3>
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
        </div>
        <p
          class="text-[#DECFA7] text-base md:text-lg text-center md:text-left max-w-2xl px-2 md:px-4"
        >
          {{ content.paragraph }}
        </p>
      </div>
    </article>
  </section>
</template>
