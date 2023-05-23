<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useDeezerStore } from "./stores/deezer";
import { useSpotifyStore } from "./stores/spotify";

useDeezerStore().fetchFromStorage();
useSpotifyStore().fetchFromStorage();

const theme = ref<"light" | "dark">("dark");

function swapTheme() {
   theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<template>
   <v-app :theme="theme">
      <v-app-bar>
         <h3 class="ml-4 font-weight-medium">Deezify</h3>
         <v-spacer></v-spacer>
         <v-btn
            :prepend-icon="`mdi-weather-${
               theme === 'light' ? 'sunny' : 'night'
            }`"
            @click="swapTheme"
            >Toggle Theme</v-btn
         >
      </v-app-bar>
      <v-main>
         <RouterView />
      </v-main>
      <v-footer> Made by @elkhayder </v-footer>
   </v-app>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

:root {
   --green: #88c228;
}

body {
   font-family: "Poppins", sans-serif;
}
</style>
