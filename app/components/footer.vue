<script setup lang="ts"></script>

<template>
  <footer
    class="bottom-0 bg-[#07080E] w-full h-36 md:h-44 p-4 sm:px-[10%] flex"
  >
    <div
      class="w-[50%] m:w-[50%] h-full flex flex-col items-start md:items-center gap-2"
    >
      <a
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        >Strona główna</a
      >
      <a
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        >Oferta</a
      >
      <a
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        >Kontakt</a
      >
      <a
        class="text-xs md:text-lg text-[#273153] font-semibold hover:text-[#485B99] hover:cursor-pointer active:text-[#485B99]"
        >Umów się</a
      >
    </div>
    <div
      class="w-[50%] md:w-[50%] h-full flex flex-col items-end md:items-center gap-4"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-phone text-[#273153] text-xs"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          +48 123 456 789
        </p>
      </span>

      <span class="flex items-center gap-2">
        <i class="pi pi-envelope text-[#273153] text-xs"></i>
        <p class="text-xs md:text-lg text-[#273153] font-semibold">
          example.english@email.com
        </p>
      </span>

      <span class="flex items-center gap-8">
        <button class="hover:cursor-pointer">
          <i
            class="pi pi-facebook text-2xl text-[#273153] hover:text-[#485B99]"
          />
        </button>
        <button class="hover:cursor-pointer">
          <i
            class="pi pi-instagram text-2xl text-[#273153] hover:text-[#485B99]"
          />
        </button>
        <button class="hover:cursor-pointer">
          <i
            class="pi pi-linkedin text-2xl text-[#273153] hover:text-[#485B99]"
          />
        </button>
      </span>
    </div>
  </footer>
</template>
