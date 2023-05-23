<template>
   <div class="wrapper">
      <!-- <h1 class="title">Deezify</h1>
      <h4 class="subtitle">Sync your Spotify & Deezer playlists</h4>
      <Card />
      <SpotifyCard />
      <DeezerCard /> -->
      <v-btn> Spotify </v-btn>
      <!-- <a v-if="!DeezerStore.user" :href="auth_links.deezer">Deezer</a>
      <h2 v-if="DeezerStore.user">Deezer: {{ DeezerStore.user.name }}</h2>
      <DeezerTracks v-if="DeezerStore.user" />
      <br />
      <a v-if="!SpotifyStore.user" :href="auth_links.spotify">Spotify</a>
      <h2 v-if="SpotifyStore.user">
         Spotify: {{ SpotifyStore.user.display_name }}
      </h2>
      <SpotifyTracks v-if="SpotifyStore.user" /> -->
   </div>
</template>

<script setup lang="ts">
import DeezerCard from "@/components/DeezerCard.vue";
import SpotifyCard from "@/components/SpotifyCard.vue";
import Card from "@/components/Card.vue";
</script>

<style scoped lang="scss"></style>
