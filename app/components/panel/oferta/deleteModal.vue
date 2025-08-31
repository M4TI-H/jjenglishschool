<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <div
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <h2 class="text-xl font-semibold">Czy na pewno chcesz usunąć?</h2>
      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] font-semibold rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] font-semibold rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Usuń
        </button>
      </span>
    </div>
  </div>
</template>
