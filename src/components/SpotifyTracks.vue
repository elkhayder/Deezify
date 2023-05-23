<template>
   <ul v-if="tracks">
      <li v-for="track in tracks">
         <i> {{ track.name }}</i>
         -
         <b>{{ track.artists[0].name }}</b>
      </li>
   </ul>
</template>

<script setup lang="ts">
import { Spotify } from "@/include/axios";
import type { SpotifyTrack } from "@/include/types";
import { ref } from "vue";

Spotify.get("/me/tracks").then(
   (v) => (tracks.value = v.data.items.map((x: any) => x.track))
);

const tracks = ref<SpotifyTrack[] | null>(null);
</script>

<style lang="scss"></style>
