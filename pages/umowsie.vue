<script setup lang="ts">
import { ref } from "vue";

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
  navigateTo("/umowsie#form");
}
</script>

<template>
  <HamburgerMenu />
  <NavMenu />
  <ScrollToTop />
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#1A2137]"
  >
    <h2 class="text-3xl md:text-4xl text-[#DECFA7] font-semibold">
      Zapisz się na zajęcia
    </h2>
    <div
      class="w-full flex flex-col md:flex-row items-center md:justify-center gap-16 py-16"
    >
      <button
        @click="toggleForm('regular')"
        class="w-[16rem] lg:w-[16rem] h-[4rem] text-[#0e121e] text-lg rounded-xl bg-[#DECFA7] active:bg-[#CDB67A] hover:cursor-pointer hover:bg-[#CDB67A]"
      >
        Jestem stałym uczniem
      </button>
      <button
        @click="toggleForm('new')"
        class="w-[16rem] lg:w-[16rem] h-[4rem] text-[#0e121e] textlg rounded-xl bg-[#DECFA7] active:bg-[#CDB67A] hover:cursor-pointer hover:bg-[#CDB67A]"
      >
        Chcę zapisać się na korepetycje
      </button>
    </div>

    <div id="form" v-if="showRegularStudent">Kalendarzyk z godzinami</div>

    <div id="form" v-if="showNewStudent">
      Formularz kontaktowy dla nowego ucznia
    </div>
  </main>
  <Footer />
</template>
