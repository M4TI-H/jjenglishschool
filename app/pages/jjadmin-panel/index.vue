<script setup lang="ts">
const displayedForm = ref<string>("kontakt");
</script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center pb-4 py-8 bg-[#D9D9D9]"
  >
    <h1 class="text-[#444] text-2xl font-bold mb-8">Panel administratora</h1>
    <section
      class="w-full md:w-[96rem] md:h-[48rem] flex flex-col md:flex-row bg-[#999] rounded-2xl"
    >
      <div class="w-full md:w-[16rem] flex md:flex-col">
        <button
          @click="displayedForm = 'kontakt'"
          :class="
            displayedForm === 'kontakt'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 md:w-full h-[4rem] flex md:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="pi pi-phone text-xl text-[#444]"
          ></i>
          <h2
            :class="displayedForm === 'kontakt' ? 'text-black' : 'text-[#444]'"
            class="text-[#444] font-semibold hidden md:block"
          >
            Dane kontaktowe
          </h2>
        </button>

        <button
          @click="displayedForm = 'oferta'"
          :class="
            displayedForm === 'oferta'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 md:w-full h-[4rem] flex md:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="pi pi-tag text-xl"
          ></i>
          <h2
            :class="displayedForm === 'oferta' ? 'text-black' : 'text-[#444]'"
            class="font-semibold hidden md:block"
          >
            Oferta i cennik
          </h2>
        </button>

        <button
          @click="displayedForm = 'content'"
          :class="
            displayedForm === 'content'
              ? ['bg-[#eee]', 'hover:bg-[#eee]']
              : ['bg-[#999]', 'hover:bg-[#888]']
          "
          class="w-1/3 md:w-full h-[4rem] flex md:rounded-l-2xl items-center justify-center p-4 gap-2 hover:cursor-pointer"
        >
          <i
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="pi pi-bars text-2xl text-[#444]"
          ></i>
          <h2
            :class="displayedForm === 'content' ? 'text-black' : 'text-[#444]'"
            class="text-[#444] font-semibold hidden md:block"
          >
            Zawartość strony
          </h2>
        </button>
      </div>
      <div class="w-full flex flex-col bg-[#eee] md:rounded-r-2xl">
        <PanelContact v-if="displayedForm === 'kontakt'" />
        <PanelOferta v-if="displayedForm === 'oferta'" />
        <!--<PanelContent v-if="displayedForm === 'content'" /> -->
      </div>
    </section>
  </main>
</template>
