<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const displayBtn = ref<boolean>(false);

const handleShowScroll = () => {
  if (window.pageYOffset > 200) displayBtn.value = true;
  else displayBtn.value = false;
};

const route = useRoute();
const hideLayout = ["/jjadmin", "/jjadmin-panel"];

onMounted(() => {
  window.addEventListener("scroll", handleShowScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleShowScroll);
});
</script>

<template>
  <div>
    <div id="top" class="absolute"></div>
    <button
      v-if="displayBtn"
      @click="navigateTo('#top')"
      class="fixed bottom-8 right-4 bg-[#DECFA7] active:bg-[#CDB67A] hover:bg-[#CDB67A] hover:cursor-pointer size-[3rem] rounded-full"
    >
      <i class="pi pi-arrow-up"></i>
    </button>

    <HamburgerMenu v-if="!hideLayout.includes(route.path)" />
    <NavMenu v-if="!hideLayout.includes(route.path)" />
    <NuxtPage />
    <Footer v-if="!hideLayout.includes(route.path)" />
  </div>
</template>
