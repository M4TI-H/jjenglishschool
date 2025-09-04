<script setup lang="ts">
const content = {
  header: "Lorem ipsum dolor sit amet",
  body_header: "Lorem ipsum",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel mauris scelerisque, rhoncus justo sed, eleifend lectus. Ut vel tellus at elit placerat semper vitae eu sapien. Sed eleifend venenatis augue. Sed ac erat eu diam aliquam posuere.",
  footer: "Lorem ipsum dolor",
};
</script>

<template>
  <section
    class="max-w-[72rem] self-center w-full flex justify-center items-center text-center md:text-left p-4 md:py-16"
  >
    <div class="md:w-[60%] flex flex-col">
      <h3
        class="text-[#DECFA7] max-w-[40rem] text-lg lg:text-2xl font-semibold"
      >
        {{ content.header }}
      </h3>
      <br />
      <span class="max-w-[40rem] text-md">
        <h3 class="text-[#DECFA7] lg:text-2xl">
          {{ content.body_header }}
        </h3>
        <p class="text-[#DECFA7] lg:text-xl">{{ content.body }}</p>
      </span>
      <h1 class="text-3xl md:text-5xl text-[#DECFA7] mt-8">
        {{ content.footer }}
      </h1>
    </div>
    <img
      src="/logo.jpeg"
      alt="logo"
      class="w-[20rem] md:w-[12rem] lg:w-[30rem] md:h-[10rem] lg:h-[20rem] hidden md:block"
    />
  </section>
</template>
