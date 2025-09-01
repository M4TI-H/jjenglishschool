<script setup lang="ts">
import { PanelOfertaDeleteModal, PanelOfertaEditModal } from "#components";

const oferty = [
  {
    id: 0,
    name: "Indywidualna godzina korepetycji",
    description:
      "Pełna godzina zajęć dopasowanych do Twojego poziomu — konwersacje, gramatyka, słownictwo i ćwiczenia w mówieniu.",
    price: 100,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 1,
    name: "Rozmowa po angielsku",
    description:
      "60 minut luźnej konwersacji z korektą błędów i wskazówkami — idealne, żeby przełamać barierę językową.",
    price: 80,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 2,
    name: "Trening maturalny",
    description:
      "Przerabianie zadań maturalnych krok po kroku, strategie egzaminacyjne i pewność na maturze.",
    price: 100,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 3,
    name: "Szybka powtórka do testu",
    description:
      "Skondensowane zajęcia tuż przed sprawdzianem — kluczowe zagadnienia, przykładowe zadania i pewność na klasówce.",
    price: 60,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 4,
    name: "Business English",
    description:
      "Zajęcia skupione na języku w pracy — e-maile, prezentacje, spotkania i small talk w środowisku zawodowym.",
    price: 120,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 5,
    name: "Angielski w podróży",
    description:
      "Lekcje praktyczne dla turystów — jak zamówić jedzenie, kupić bilet czy poradzić sobie na lotnisku.",
    price: 90,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 6,
    name: "Angielski od podstaw",
    description:
      "Systematyczne zajęcia krok po kroku dla osób zaczynających naukę od zera. Bez stresu i z dużą dawką cierpliwości.",
    price: 100,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 7,
    name: "Przygotowanie do rozmowy kwalifikacyjnej",
    description:
      "Symulacje interview po angielsku, najczęstsze pytania i praktyczne wskazówki, jak dobrze wypaść.",
    price: 120,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 8,
    name: "Angielski dla dzieci",
    description:
      "Zajęcia w formie zabawy, gier i piosenek, które rozwijają słownictwo i oswajają z językiem od najmłodszych lat.",
    price: 70,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 9,
    name: "Kurs intensywny",
    description:
      "Kilka spotkań tygodniowo — idealny sposób na szybkie podciągnięcie poziomu przed ważnym wyjazdem czy egzaminem.",
    price: 150,
    duration: "1 godzina",
    active: true,
  },
  {
    id: 10,
    name: "Korekta tekstów i esejów",
    description:
      "Poprawa błędów, wskazówki językowe i omówienie tekstu krok po kroku, aby Twoje prace były na wysokim poziomie.",
    price: 50,
    duration: "1 godzina",
    active: false,
  },
];

const displayDelete = ref<boolean>(false);
const toggleDisplayDelete = () => {
  displayDelete.value = !displayDelete.value;
};

const displayEdit = ref<boolean>(false);
const toggleDisplayEdit = () => {
  displayEdit.value = !displayEdit.value;
};

const toggleActive = () => {};
</script>

<template>
  <section class="w-full flex flex-col items-center p-4 gap-4">
    <PanelOfertaDeleteModal v-if="displayDelete" @close="toggleDisplayDelete" />
    <PanelOfertaEditModal v-if="displayEdit" @close="toggleDisplayEdit" />
    <h2 class="text-2xl font-semibold">Aktualna oferta</h2>

    <div class="w-[90%] max-h-[36rem] flex flex-col overflow-y-auto gap-4">
      <div
        v-for="oferta in oferty"
        class="relative w-full bg-[#d9d9d9] flex flex-col items-start p-2 pb-8 md:pb-2 rounded-lg"
      >
        <span class="flex items-center gap-1">
          <i class="pi pi-tag text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Nazwa</p>
        </span>
        <p class="font-semibold w-[80%] ml-1 mb-2">
          {{ oferta.name }}
        </p>

        <span class="flex items-center gap-1">
          <i class="pi pi-align-left text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Opis</p>
        </span>
        <p class="text-sm text-[#444] font-thin max-w-[80%] ml-1 mb-2">
          {{ oferta.description }}
        </p>

        <span class="flex items-center gap-1">
          <i class="pi pi-money-bill text-sm text-[#444]"></i>
          <p class="text-sm text-[#444]">Koszt zajęć</p>
        </span>
        <p class="font-semibold text-lg ml-1 mb-2">
          {{ oferta.price }} zł / godzina
        </p>

        <div
          class="absolute top-2 right-2 w-[4rem] h-[2rem] flex items-center justify-around"
        >
          <button
            @click="toggleDisplayEdit"
            class="size-[2rem] rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
          >
            <i class="pi pi-pen-to-square text-xl"></i>
          </button>
          <button
            @click="toggleDisplayDelete"
            class="size-[2rem] rounded-lg hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer"
          >
            <i class="pi pi-trash text-xl"></i>
          </button>
        </div>
        <span class="absolute bottom-2 right-4 flex items-center gap-2">
          <p
            class="font-semibold"
            :class="oferta.active ? 'text-[green]' : 'text-[red]'"
          >
            {{ oferta.active ? "Oferta aktywna" : "Oferta nieaktywna" }}
          </p>
          |
          <p @click="toggleActive" class="hover:underline hover:cursor-pointer">
            {{ oferta.active ? "Wyłącz" : "Włącz" }}
          </p>
        </span>
      </div>
    </div>

    <button
      class="w-[10rem] h-[2.5rem] text-[#444] font-semibold mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
    >
      Dodaj nową ofertę
    </button>
  </section>
</template>
