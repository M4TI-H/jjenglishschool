<script setup lang="ts">
const oferty = [
  {
    id: 0,
    name: "Indywidualna godzina korepetycji",
    description:
      "Pełna godzina zajęć dopasowanych do Twojego poziomu — konwersacje, gramatyka, słownictwo i ćwiczenia w mówieniu.",
    price: 100,
  },
  {
    id: 1,
    name: "Rozmowa po angielsku",
    description:
      "60 minut luźnej konwersacji z korektą błędów i wskazówkami — idealne, żeby przełamać barierę językową.",
    price: 80,
  },
  {
    id: 2,
    name: "Trening maturalny",
    description:
      "Przerabianie zadań maturalnych krok po kroku, strategie egzaminacyjne i pewność na maturze.",
    price: 100,
  },
  {
    id: 2,
    name: "Szybka powtórka do testu",
    description:
      "Skondensowane zajęcia tuż przed sprawdzianem — kluczowe zagadnienia, przykładowe zadania i pewność na klasówce.",
    price: 60,
  },
  {
    id: 3,
    name: "Business English",
    description:
      "Zajęcia skupione na języku w pracy — e-maile, prezentacje, spotkania i small talk w środowisku zawodowym.",
    price: 120,
  },
  {
    id: 4,
    name: "Angielski w podróży",
    description:
      "Lekcje praktyczne dla turystów — jak zamówić jedzenie, kupić bilet czy poradzić sobie na lotnisku.",
    price: 90,
  },
];
</script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137]"
  >
    <h1 class="text-3xl md:text-4xl text-[#DECFA7] font-bold">Oferta</h1>

    <div
      class="max-w-[50rem] w-full flex flex-wrap justify-center gap-8 md:gap-16 p-4"
    >
      <div
        v-for="oferta in oferty"
        :key="oferta.id"
        class="max-w-[20rem] w-full flex flex-col"
      >
        <span
          class="w-full flex flex-col border-b-1 pb-2 border-b-[#DECFA7] gap-2"
        >
          <h2 class="md:text-xl text-[#DECFA7] font-semibold">
            {{ oferta.name }}
          </h2>
          <p class="text-sm text-[#DECFA7]">
            {{ oferta.description }}
          </p>
        </span>

        <span class="w-full flex items-center justify-between py-2">
          <p class="text-xl md:text-2xl text-[#DECFA7] font-bold">
            {{ oferta.price }} zł / godz
          </p>
          <button
            class="w-[8rem] h-[2rem] rounded-lg text-sm font-semibold bg-[#DECFA7] hover:bg-[#CDB67A] hover:cursor-pointer active:bg-[#CDB67A]"
          >
            <span class="flex items-center justify-center gap-3"
              >Umów się
              <i class="pi pi-arrow-circle-right"></i>
            </span>
          </button>
        </span>
      </div>
    </div>
  </main>
</template>
