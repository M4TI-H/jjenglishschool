<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const hideLayout = ["/jjadmin", "/jjadmin-panel", "/jjadmin/change-password"];
</script>

<template>
  <div>
    <ScrollToTop v-if="!hideLayout.includes(route.path)" />
    <HamburgerMenu v-if="!hideLayout.includes(route.path)" />
    <NavMenu v-if="!hideLayout.includes(route.path)" />
    <NuxtPage />
    <Footer v-if="!hideLayout.includes(route.path)" />
  </div>
</template>
