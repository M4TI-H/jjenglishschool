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
  <section
    class="relative flex flex-col items-center w-full mx-auto mt-12 md:mt-16 mb-16"
  >
    <div id="bookero"></div>
  </section>
</template>

<style>
#bookero-plugin {
  background-color: rgba(255, 255, 255, 0.6);
  max-width: 100vw;
  width: 50rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}

.bookero-plugin-form-wrapper {
  width: 100%;
}

.bookero-plugin-header {
  font-size: 1.5rem;
  color: #decfa7;
  font-weight: 700;
  margin-bottom: 1rem;
}

#bookero-plugin-service {
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: none;
}

#bookero-plugin-service::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

#bookero-plugin-service:focus {
  border-color: #445688;
  outline: none;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 12rem;
  height: 3rem;
  background-color: #decfa7;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #cdb67a;
  cursor: pointer;
}

option {
  color: black;
}

@media (min-width: 768px) {
  .my-contact-header {
    font-size: 1.875rem;
  }
}
</style>
