<script setup lang="ts">
import type CustomContent from "~/types/customContent";

const emit = defineEmits<{
  (e: "close"): void;
  (e: "refresh"): void;
}>();

const { element } = defineProps<{
  element: CustomContent | null;
}>();

const { loading, deleteCustomElement } = useContent();

const handleElementDelete = async () => {
  if (!element) return;

  await deleteCustomElement(element.id);

  emit("refresh");
  emit("close");
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <div
      class="w-[90%] max-w-[24rem] flex flex-col items-center p-4 gap-4 md:gap-8 bg-[#D9D9D9] rounded-xl pb-8 z-40"
    >
      <p class="text-xl">Czy na pewno chcesz usunąć?</p>
      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          @click="handleElementDelete"
          v-if="!loading"
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Usuń
        </button>
        <button
          v-if="loading"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          <i class="pi pi-spinner pi-spin"></i>
        </button>
      </span>
    </div>
  </div>
</template>
