<script setup lang="ts">
const content = [
  {
    id: 0,
    title: "Kim jestem?",
    content:
      "Nazywam się Jan, jestem studentem filologii angielskiej w Gdańsku i od kilku lat pasjonuję się nauczaniem języka. Pomagam uczniom przełamywać bariery i uczyć się w przyjaznej atmosferze.",
    cover:
      "https://images.unsplash.com/photo-1746310712275-c80c0f2dab27?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Moje podejście",
    content:
      "Stawiam na praktykę i rozmowę — u mnie nie ma nudnych wykładów, tylko realne sytuacje, w których możesz wykorzystać język od razu.",
    cover:
      "https://images.unsplash.com/photo-1669608200997-23a98a5e5ee9?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Dla kogo?",
    content:
      "Pracuję zarówno z uczniami przygotowującymi się do matury, jak i z dorosłymi, którzy chcą podszlifować angielski do pracy, podróży czy rozmów towarzyskich.",
    cover:
      "https://images.unsplash.com/photo-1648737966614-55e58b5e3caf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Dlaczego warto?",
    content:
      "Łączę wiedzę akademicką z praktycznym podejściem, mam cierpliwość, energię i dopasowuję zajęcia do Twoich potrzeb — a do tego uczymy się w swobodnej, bezstresowej atmosferze.",
    cover:
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
      v-for="text in content"
      :key="text.id"
      class="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4"
    >
      <span class="flex flex-col gap-2">
        <h3
          class="text-xl md:text-2xl text-[#DECFA7] font-semibold text-center md:text-left"
        >
          {{ text.title }}
        </h3>
        <p
          class="text-[#DECFA7] md:text-lg text-center md:text-left max-w-[28rem]"
        >
          {{ text.content }}
        </p>
      </span>

      <img
        :src="text.cover"
        :alt="text.title"
        class="w-[20rem] md:w-[16rem] md:h-[12rem] xl:w-[24rem] xl:h-[16rem] rounded-lg"
      />
    </div>
  </section>
</template>
