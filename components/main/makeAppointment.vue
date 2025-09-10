<script setup lang="ts">
import { ref } from "vue";
useHead({
  title: "JJ English School | Umów się",
  meta: [
    {
      name: "description",
      content:
        "JJ English School | zarezerwuj pierwsze spotkanie już dziś, wspólnie ustalimy Twój cel i plan nauki angielskiego",
    },
  ],
});

const showRegularStudent = ref<boolean>(false);
const showNewStudent = ref<boolean>(false);

function toggleForm(type: string) {
  if (type === "regular") {
    showRegularStudent.value = !showRegularStudent.value;
    showNewStudent.value = false;
  } else if (type === "new") {
    showNewStudent.value = !showNewStudent.value;
    showRegularStudent.value = false;
  }
  navigateTo("/#form");
}
</script>
<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137]"
  >
    <h2
      class="text-3xl md:text-4xl text-[#DECFA7] font-semibold mb-8 px-4 text-center"
    >
      Zapisz się na zajęcia
    </h2>
    <p class="text-md md:text-lg text-[#DECFA7] max-w-[50rem] text-center px-4">
      Nowi uczniowie, którzy jeszcze nie uczestniczyli w zajęciach, proszeni są
      o wypełnienie formularza kontaktowego przed umówieniem pierwszej lekcji.
    </p>
    <div
      class="w-full flex flex-col md:flex-row items-center md:justify-center gap-16 py-16"
    >
      <button
        @click="toggleForm('regular')"
        class="w-[16rem] lg:w-[16rem] h-[4rem] text-[#0e121e] rounded-xl bg-[#DECFA7] active:bg-[#CDB67A] hover:cursor-pointer hover:bg-[#CDB67A]"
      >
        Jestem stałym uczniem
      </button>
      <button
        @click="toggleForm('new')"
        class="w-[16rem] lg:w-[16rem] h-[4rem] text-[#0e121e] rounded-xl bg-[#DECFA7] active:bg-[#CDB67A] hover:cursor-pointer hover:bg-[#CDB67A]"
      >
        Jeszcze nie jestem zapisany
      </button>
    </div>

    <FormsMonthlyBox id="form" v-if="showRegularStudent" />

    <FormsContactBox id="form" v-if="showNewStudent" />
  </main>
</template>
