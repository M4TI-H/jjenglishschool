<template>
  <section
    class="relative w-full max-w-5xl mx-auto px-4 md:px-6 mt-16 md:mt-24 mb-29 md:mb-36"
  >
    <div
      class="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 pt-10 md:pt-16 pb-20 md:pb-32"
    >
      <video
        src="/assets/england-flag-1.webm"
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-4xl blur-sm md:blur mask-b-from-1 mask-l-from-1 z-0"
      ></video>

      <div
        class="absolute inset-0 w-full h-full bg-[#0e121e]/60 rounded-2xl md:rounded-4xl z-10"
      ></div>

      <div
        class="relative z-30 flex-1 max-w-none md:max-w-lg text-center md:text-left"
      >
        <h1 class="text-4xl md:text-5xl font-bold text-[#decfa7] mb-6">
          JJ English School
        </h1>

        <p class="text-base md:text-lg text-[#decfa7] mb-8 md:mb-12">
          Skuteczne lekcje angielskiego online i w Trójmieście.<br />
          Indywidualne podejście, przygotowanie do egzaminów i swobodne
          konwersacje.
        </p>
        <a
          href="/#oferta"
          class="inline-block bg-[#2A3553] relative z-30 hover:bg-[#1c2336] hover:cursor-pointer text-white hover:text-[#ddd] py-3 px-8 rounded-lg shadow transition-all duration-300"
          >Zapoznaj się z ofertą</a
        >
      </div>

      <div
        class="relative z-20 flex-1 flex justify-center items-start mt-6 md:mt-0"
      >
        <img
          src="/logo.png"
          alt="JJ English School Logo"
          class="w-56 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
        />
      </div>

      <div class="absolute -bottom-24 md:-bottom-32 left-0 right-0 z-20">
        <img
          src="assets/london.png"
          alt="London skyline"
          class="w-full object-cover opacity-100 mask-l-from-1 mask-b-from-10% sm:block select-none pointer-events-none"
        />
      </div>
    </div>
  </section>
</template>
