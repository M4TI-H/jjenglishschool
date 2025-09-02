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
      <p class="text-xl">Zmiana danych oferty</p>
      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-tag text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Nazwa oferty</p>
        </span>
        <input
          type="text"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
      </div>

      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-align-left text-lg text-[#777]"></i>
          <p class="text-lg text-[#777]">Opis</p>
        </span>
        <textarea
          type="text"
          class="bg-[#eee] w-full h-[6rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] p-2 font-semibold resize-none"
        />
      </div>

      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center justify-between">
          <span class="flex items-center gap-2 w-7/15">
            <i class="pi pi-money-bill text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Koszt zajęć</p>
          </span>
          <span class="flex items-center gap-2 w-7/15">
            <i class="pi pi-clock text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Czas trwania</p>
          </span>
        </span>

        <span class="flex items-center justify-between">
          <input
            type="text"
            class="bg-[#eee] w-7/15 h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <input
            type="text"
            class="bg-[#eee] w-7/15 h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
        </span>
      </div>

      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Potwierdź
        </button>
      </span>
    </div>
  </div>
</template>
