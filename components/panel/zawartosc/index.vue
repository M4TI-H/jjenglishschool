<script setup lang="ts">
import type CustomContent from "~/types/customContent";

const { customContentData, fetchCustomContentData } = useContent();

const selectedElement = ref<CustomContent | null>(null);

const refreshData = async () => {
  await fetchCustomContentData();
};

const displayNew = ref<boolean>(false);
const closeNewModal = async () => {
  displayNew.value = false;
  await refreshData();
};

const displayDelete = ref<boolean>(false);
const displayDeleteModal = (element: CustomContent) => {
  selectedElement.value = element;
  displayDelete.value = !displayDelete.value;
};

const displayEdit = ref<boolean>(false);
const displayEditModal = (element: CustomContent) => {
  selectedElement.value = element;
  displayEdit.value = !displayEdit.value;
};

onMounted(async () => {
  await fetchCustomContentData();
});
</script>

<template>
  <section class="w-full min-h-[42rem] flex flex-col items-center p-4 gap-4">
    <PanelZawartoscDeleteModal
      v-if="displayDelete"
      :element="selectedElement"
      @close="displayDelete = false"
      @refresh="refreshData"
    />

    <PanelZawartoscEditModal
      v-if="displayEdit"
      :element="selectedElement"
      @close="displayEdit = false"
      @refresh="refreshData"
    />

    <PanelZawartoscNewElementModal
      v-if="displayNew"
      @close="closeNewModal"
      @refresh="refreshData"
    />

    <p class="text-2xl">Zawartość strony</p>
    <div
      class="w-full max-h-[36rem] flex flex-col gap-4 overflow-y-auto pb-16 xl:pb-0"
    >
      <div
        class="relative w-full flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
      >
        <div
          class="w-full flex flex-col md:flex-row md:items-center justify-between gap-2"
        >
          <h3 class="text-xl text-[#444]">Panel własny</h3>
          <button
            @click="displayNew = true"
            class="w-full md:w-[10rem] max-w-[20rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
          >
            Dodaj element
          </button>
        </div>

        <div
          v-for="(part, id) in customContentData"
          :key="id"
          class="relative bg-[#eee] p-4 rounded-lg flex flex-col justify-center gap-2"
        >
          <p class="md:text-lg text-[#777]">Element #{{ id + 1 }}</p>

          <img
            :src="part.image_url"
            class="w-full h-[12rem] md:w-[20rem] rounded-lg object-cover"
          />

          <span class="flex items-center gap-2">
            <i class="pi pi-star"></i>
            <p class="max-w-[80%] overflow-hidden">
              {{ part.header }}
            </p>
          </span>

          <span class="flex items-center gap-2">
            <i class="pi pi-align-center"></i>
            <p class="max-w-[80%] overflow-hidden">
              {{ part.paragraph }}
            </p>
          </span>

          <div
            class="absolute top-2 right-2 flex items-center justify-around gap-2"
          >
            <button
              @click="displayEditModal(part)"
              class="size-[2rem] flex items-center justify-center rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
            >
              <i class="pi pi-pen-to-square text-xl"></i>
            </button>
            <button
              @click="displayDeleteModal(part)"
              class="size-[2rem] flex items-center justify-center rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
            >
              <i class="pi pi-trash text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
