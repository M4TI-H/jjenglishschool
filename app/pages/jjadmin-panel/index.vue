<script setup lang="ts">
const displayedForm = ref<string>("kontakt");
</script>

<template>
  <main
    class="fixed w-screen min-h-screen flex flex-col items-center pb-4 py-8 bg-[#D9D9D9]"
  >
    <p class="text-[#444] text-2xl font-bold mb-8">Panel administratora</p>
    <section
      class="w-full lg:w-[80%] h-[80%] max-w-[90rem] flex flex-col lg:flex-row bg-[#999] rounded-2xl"
    >
      <div class="w-full lg:w-[16rem] lg:flex-shrink-0 flex lg:flex-col">
        <button
          @click="displayedForm = 'kontakt'"
          :class="
            displayedForm === 'kontakt'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="pi pi-phone text-xl text-[#444]"
          ></i>
          <p
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Dane kontaktowe
          </p>
        </button>

        <button
          @click="displayedForm = 'oferta'"
          :class="
            displayedForm === 'oferta'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="pi pi-tag text-xl"
          ></i>
          <p
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Oferta i cennik
          </p>
        </button>

        <button
          @click="displayedForm = 'content'"
          :class="
            displayedForm === 'content'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 lg:w-full h-[4rem] flex lg:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="pi pi-bars text-2xl text-[#444]"
          ></i>
          <p
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="text-lg text-[#444] hidden lg:block"
          >
            Zawartość strony
          </p>
        </button>
      </div>
      <div
        class="w-full max-h-[48rem] flex flex-col bg-[#eee] lg:rounded-r-2xl"
      >
        <PanelContact v-if="displayedForm === 'kontakt'" />
        <PanelOferta v-if="displayedForm === 'oferta'" />
        <PanelZawartosc v-if="displayedForm === 'content'" />
      </div>
    </section>
  </main>
</template>
