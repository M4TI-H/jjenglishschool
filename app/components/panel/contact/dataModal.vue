<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

const { data } = defineProps<{
  data: any;
}>();
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <div
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <h2 class="text-xl font-semibold">Zmiana danych kontaktowych</h2>
      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-user md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">Imię i nazwisko</p>
        </span>
        <input
          type="text"
          :value="data.name_surname"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
      </div>

      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-phone md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">Numer telefonu</p>
        </span>
        <input
          type="text"
          :value="data.phone_number"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
      </div>

      <div class="w-full flex flex-col gap-1">
        <span class="flex items-center gap-2">
          <i class="pi pi-envelope md:text-lg text-[#777]"></i>
          <p class="md:text-lg text-[#777]">E-mail</p>
        </span>
        <input
          type="text"
          :value="data.email"
          class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
        />
      </div>
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
          Potwierdź
        </button>
      </span>
    </div>
  </div>
</template>
