<script lang="ts"></script>

<template>
  <main
    class="max-w-screen w-full min-h-screen flex flex-col items-center justify-center pb-4 py-8 bg-[#1A2137]"
  >
    <div
      class="bg-[#0e121e] w-[90%] md:max-w-[24rem] lg:max-w-[32rem] py-8 px-4 flex flex-col items-center rounded-xl gap-8"
    >
      <h1 class="text-[#DECFA7] text-2xl font-bold">Panel administratora</h1>
      <img src="../public/logo.jpeg" class="w-[8rem]" />
      <div class="flex flex-col gap-4 lg:gap-8">
        <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
          <i
            class="pi pi-user absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
          ></i>
          <input
            type="text"
            placeholder="Login"
            class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
          />
        </div>
        <div class="relative max-w-[20rem] lg:max-w-[28rem] w-full">
          <i
            class="pi pi-lock absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#DECFA7]"
          ></i>
          <input
            type="text"
            placeholder="Hasło"
            class="bg-[#1A2137] w-full h-[3rem] rounded-lg pl-10 pr-2 focus:outline-2 focus:outline-[#DECFA7] text-lg text-[#DECFA7] font-semibold"
          />
        </div>
      </div>

      <button
        class="min-w-[10em] lg:w-[12rem] lg:text-md h-12 bg-[#DECFA7] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#CDB67A] active:bg-[#CDB67A]"
      >
        Zaloguj
      </button>
    </div>
  </main>
</template>
