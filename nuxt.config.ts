import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "JJ English School",
      link: [{ rel: "icon", type: "image/png", href: "/logo.jpeg" }],
    },
  },
  ssr: true,
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
});
