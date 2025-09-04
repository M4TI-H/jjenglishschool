<script setup lang="ts">
import type Lesson from "~/types/lesson";

const { loading, lessonsData, fetchLessons, switchActivity } = useLessons();

const selectedLesson = ref<Lesson | null>(null);

const refreshData = async () => {
  await fetchLessons();
};

const displayNew = ref<boolean>(false);
const closeNewModal = async () => {
  displayNew.value = false;
  await refreshData();
};

const displayDelete = ref<boolean>(false);
const displayDeleteModal = (oferta: Lesson) => {
  selectedLesson.value = oferta;
  displayDelete.value = !displayDelete.value;
};

const displayEdit = ref<boolean>(false);
const displayEditModal = (oferta: Lesson) => {
  selectedLesson.value = oferta;
  displayEdit.value = !displayEdit.value;
};

const toggleActive = async (index: number, isActive: boolean) => {
  const newActivity = !isActive;
  await switchActivity(index, newActivity);
  await refreshData();
};

onMounted(async () => {
  await fetchLessons();
});
</script>

<template>
  <section class="w-full min-h-[42rem] flex flex-col items-center p-4 gap-4">
    <PanelOfertaDeleteModal
      v-if="displayDelete"
      :lesson="selectedLesson"
      @close="displayDelete = false"
      @refresh="refreshData"
    />
    <PanelOfertaEditModal
      v-if="displayEdit"
      :lesson="selectedLesson"
      @close="displayEdit = false"
      @refresh="refreshData"
    />
    <PanelOfertaNewModal v-if="displayNew" @close="closeNewModal" />
    <p class="text-2xl">Aktualna oferta</p>
    <button
      @click="displayNew = true"
      class="w-full md:w-[10rem] max-w-[20rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
    >
      Dodaj element
    </button>
    <div class="w-full h-full flex items-center justify-center" v-if="loading">
      <i class="pi pi-spin pi-spinner text-2xl text-[#444]"></i>
    </div>
    <div
      v-if="!loading"
      class="w-full max-h-[36rem] flex flex-col overflow-y-auto gap-4 pb-24 lg:pb-0"
    >
      <div
        v-for="oferta in lessonsData"
        :key="oferta.id"
        class="relative bg-[#d9d9d9] flex flex-col items-start p-2 pb-8 md:pb-2 rounded-lg"
      >
        <span class="flex items-center gap-1">
          <i class="pi pi-tag text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Nazwa</p>
        </span>
        <p class="w-[80%] ml-1 mb-2">
          {{ oferta.name }}
        </p>

        <span class="flex items-center gap-1">
          <i class="pi pi-align-left text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Opis</p>
        </span>
        <p class="text-sm max-w-[80%] ml-1 mb-2">
          {{ oferta.description }}
        </p>

        <span class="flex items-center gap-1">
          <i class="pi pi-money-bill text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Koszt zajęć</p>
        </span>
        <p class="ml-1 mb-2">{{ oferta.price }} zł / {{ oferta.duration }}</p>

        <div
          class="absolute top-2 right-2 w-[4rem] h-[2rem] flex items-center justify-around"
        >
          <button
            @click="displayEditModal(oferta)"
            class="size-[2rem] rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
          >
            <i class="pi pi-pen-to-square text-xl"></i>
          </button>
          <button
            @click="displayDeleteModal(oferta)"
            class="size-[2rem] rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
          >
            <i class="pi pi-trash text-xl"></i>
          </button>
        </div>
        <span class="absolute bottom-2 right-4 flex items-center gap-2">
          <p
            class="font-semibold"
            :class="oferta.isActive ? 'text-[green]' : 'text-[red]'"
          >
            {{ oferta.isActive ? "Oferta aktywna" : "Oferta nieaktywna" }}
          </p>
          |
          <p
            @click="toggleActive(oferta.id, oferta.isActive)"
            class="hover:underline hover:cursor-pointer"
          >
            {{ oferta.isActive ? "Wyłącz" : "Włącz" }}
          </p>
        </span>
      </div>
    </div>
  </section>
</template>
