<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const hideLayout = ["/jjadmin", "/jjadmin-panel"];
</script>

<template>
  <div>
    <ScrollToTop />
    <HamburgerMenu v-if="!hideLayout.includes(route.path)" />
    <NavMenu v-if="!hideLayout.includes(route.path)" />
    <NuxtPage />
    <Footer v-if="!hideLayout.includes(route.path)" />
  </div>
</template>
