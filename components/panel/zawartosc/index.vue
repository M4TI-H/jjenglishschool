<script setup lang="ts">
import { PanelZawartoscEditModal, PanelZawartoscLogoModal } from "#components";

const zawartosc = [
  { part: "top", content: "Nagłówek" },
  {
    part: "mid",
    content:
      "Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis ",
  },
  { part: "bottom", content: "Stopka - hasło" },
];

const customContent = [
  {
    id: 0,
    header: "Kim jestem?",
    paragraph:
      "Nazywam się Jan, jestem studentem filologii angielskiej w Gdańsku i od kilku lat pasjonuję się nauczaniem języka. Pomagam uczniom przełamywać bariery i uczyć się w przyjaznej atmosferze.",
    image:
      "https://images.unsplash.com/photo-1746310712275-c80c0f2dab27?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    header: "Moje podejście",
    paragraph:
      "Stawiam na praktykę i rozmowę — u mnie nie ma nudnych wykładów, tylko realne sytuacje, w których możesz wykorzystać język od razu.",
    image:
      "https://images.unsplash.com/photo-1669608200997-23a98a5e5ee9?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    header: "Dla kogo?",
    paragraph:
      "Pracuję zarówno z uczniami przygotowującymi się do matury, jak i z dorosłymi, którzy chcą podszlifować angielski do pracy, podróży czy rozmów towarzyskich.",
    image:
      "https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    header: "Dlaczego warto?",
    paragraph:
      "Łączę wiedzę akademicką z praktycznym podejściem, mam cierpliwość, energię i dopasowuję zajęcia do Twoich potrzeb — a do tego uczymy się w swobodnej, bezstresowej atmosferze.",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const displayLogo = ref<boolean>(false);
const toggleDisplayLogo = () => {
  displayLogo.value = !displayLogo.value;
};

const displayWelcome = ref<boolean>(false);
const toggleDisplayWelcome = () => {
  displayWelcome.value = !displayWelcome.value;
};

const displayDelete = ref<boolean>(false);
const toggleDisplayDelete = () => {
  displayDelete.value = !displayDelete.value;
};

const displayElementEdit = ref<boolean>(false);
const toggleDisplayElementEdit = () => {
  displayElementEdit.value = !displayElementEdit.value;
};

const displayElementCreate = ref<boolean>(false);
const toggleDisplayElementCreate = () => {
  displayElementCreate.value = !displayElementCreate.value;
};
</script>

<template>
  <section class="w-full min-h-[42rem] flex flex-col items-center p-4 gap-4">
    <PanelZawartoscDeleteModal
      v-if="displayDelete"
      @close="toggleDisplayDelete"
    />

    <PanelZawartoscEditModal
      v-if="displayElementEdit"
      :data="customContent.find((c) => c.id === 0)!"
      @close="toggleDisplayElementEdit"
    />

    <PanelZawartoscLogoModal v-if="displayLogo" @close="toggleDisplayLogo" />

    <PanelZawartoscWelcomeModal
      v-if="displayWelcome"
      :data="zawartosc"
      @close="toggleDisplayWelcome"
    />

    <PanelZawartoscNewElementModal
      v-if="displayElementCreate"
      @close="toggleDisplayElementCreate"
    />

    <p class="text-2xl">Zawartość strony</p>
    <div
      class="w-full max-h-[36rem] flex flex-col gap-4 overflow-y-auto pb-16 xl:pb-0"
    >
      <div
        class="relative w-full flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
      >
        <h3 class="text-xl text-[#444]">Twoje logo</h3>
        <img src="/logo.jpeg" class="w-48 max-w-full h-auto rounded-lg" />
        <button
          @click="toggleDisplayLogo"
          class="md:absolute md:bottom-4 md:right-4 w-full md:w-[10rem] max-w-[20rem] h-[2.5rem] text-[#444] mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
        >
          Zmień
        </button>
      </div>
      <div
        class="relative w-full flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
      >
        <h3 class="text-xl text-[#444]">Panel powitalny</h3>

        <div class="flex flex-col justify-center">
          <p class="md:text-lg text-[#777]">Nagłówek</p>
          <p class="max-w-[80%]">
            {{ zawartosc.find((z) => z.part === "top")?.content }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <p class="md:text-lg text-[#777]">Opis</p>
          <p class="max-w-[80%]">
            {{ zawartosc.find((z) => z.part === "mid")?.content }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <p class="md:text-lg text-[#777]">Stopka</p>
          <p class="max-w-[80%]">
            {{ zawartosc.find((z) => z.part === "bottom")?.content }}
          </p>
        </div>

        <button
          @click="toggleDisplayWelcome"
          class="md:absolute md:bottom-4 md:right-4 w-full md:w-[10rem] max-w-[20rem] h-[2.5rem] text-[#444] mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
        >
          Edytuj sekcję
        </button>
      </div>
      <div
        class="relative w-full flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
      >
        <div
          class="w-full flex flex-col md:flex-row md:items-center justify-between gap-2"
        >
          <h3 class="text-xl text-[#444]">Panel własny</h3>
          <button
            @click="toggleDisplayElementCreate"
            class="w-full md:w-[10rem] max-w-[20rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
          >
            Dodaj element
          </button>
        </div>

        <div
          v-for="(part, id) in customContent"
          :key="id"
          class="relative bg-[#eee] p-4 rounded-lg flex flex-col justify-center gap-2"
        >
          <p class="md:text-lg text-[#777]">Element #{{ id + 1 }}</p>

          <img
            :src="part.image"
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
              @click="toggleDisplayElementEdit"
              class="size-[2rem] flex items-center justify-center rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
            >
              <i class="pi pi-pen-to-square text-xl"></i>
            </button>
            <button
              @click="toggleDisplayDelete"
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
