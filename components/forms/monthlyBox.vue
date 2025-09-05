<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  (window as any).bookero_config = {
    id: "GhjILe9OW6u6",
    container: "bookero",
    type: "calendar",
    position: "",
    plugin_css: true,
    lang: "pl",
  };

  const s = document.createElement("script");
  s.src = "https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js";
  document.body.appendChild(s);
});
</script>

<template>
  <section class="w-full md:w-[40%] bg-[#d9d9d9] rounded-lg mb-16">
    <div id="bookero"></div>
  </section>
</template>
