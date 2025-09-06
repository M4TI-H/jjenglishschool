<script setup lang="ts">
const { customContentData, fetchCustomContentData } = useContent();

onMounted(async () => {
  await fetchCustomContentData();
});
</script>

<template>
  <section
    class="w-full xl:w-[80%] max-w-[72rem] flex flex-col items-center justify-center py-4 px-4 md:px-28 gap-4"
  >
    <h2 class="text-3xl text-[#DECFA7] font-semibold">O mnie</h2>
    <article
      v-for="text in customContentData"
      :key="text.id"
      class="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4"
    >
      <span class="flex flex-col gap-2">
        <span class="w-full flex items-center gap-4">
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
          <h3
            class="flex-shrink-0 text-xl md:text-2xl text-[#DECFA7] font-semibold text-center md:text-left"
          >
            {{ text.header }}
          </h3>
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
        </span>

        <p
          class="text-[#DECFA7] md:text-lg text-center md:text-left max-w-[28rem]"
        >
          {{ text.paragraph }}
        </p>
      </span>
      <div
        class="w-[20rem] md:w-[16rem] md:h-[12rem] xl:w-[24rem] xl:h-[16rem] rounded-bl-2xl rounded-tr-2xl border-6 border-white overflow-hidden"
      >
        <img
          :src="text.image_url"
          :alt="text.image_name"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </article>
  </section>
</template>
