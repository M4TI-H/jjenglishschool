<script setup lang="ts">
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
</script>

<template>
  <section
    class="w-full xl:w-[80%] max-w-[72rem] flex flex-col items-center justify-center py-4 px-4 md:px-28 gap-4"
  >
    <h2 class="text-3xl text-[#DECFA7] font-semibold">O mnie</h2>
    <div
      v-for="text in customContent"
      :key="text.id"
      class="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4"
    >
      <span class="flex flex-col gap-2">
        <span class="w-full flex items-center gap-4">
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
          <h3
            class="flex-shrink-0 text-xl md:text-2xl text-[#DECFA7] font-semibold text-center md:text-left"
          >
            {{ text.header }}
          </h3>
          <div class="flex-1 h-[2px] bg-[#DECFA7]"></div>
        </span>

        <p
          class="text-[#DECFA7] md:text-lg text-center md:text-left max-w-[28rem]"
        >
          {{ text.paragraph }}
        </p>
      </span>
      <div
        class="w-[20rem] md:w-[16rem] md:h-[12rem] xl:w-[24rem] xl:h-[16rem] rounded-bl-2xl rounded-tr-2xl border-6 border-white overflow-hidden"
      >
        <img
          :src="text.image"
          :alt="text.header"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  </section>
</template>
