<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const displayBtn = ref<boolean>(false);
let calculatePositionFlag: boolean = false;

const onScroll = () => {
  if (!calculatePositionFlag) {
    requestAnimationFrame(() => {
      const positionY = window.scrollY;
      const viewHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      displayBtn.value =
        positionY > 200 && positionY + viewHeight < pageHeight - 50;
      calculatePositionFlag = false;
    });
    calculatePositionFlag = true;
  }
};

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    v-if="displayBtn"
    @click="handleScroll"
    class="fixed bottom-8 right-4 bg-[#DECFA7] active:bg-[#CDB67A] hover:bg-[#CDB67A] hover:cursor-pointer size-[3rem] rounded-full transition duration-150 ease-in-out"
  >
    <i class="pi pi-arrow-up"></i>
  </button>
</template>
