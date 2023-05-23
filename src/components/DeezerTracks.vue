<template>
   <ul v-if="tracks">
      <li v-for="track in tracks">
         <i> {{ track.title }}</i>
         -
         <b>{{ track.artist.name }}</b>
      </li>
   </ul>
</template>

<script setup lang="ts">
import { Deezer } from "@/include/axios";
import type { DeezerTrack } from "@/include/types";
import { useDeezerStore } from "@/stores/deezer";
import { ref } from "vue";

const DeezerStore = useDeezerStore();

Deezer.get("/user/me/tracks").then((v) => (tracks.value = v.data.data));

const tracks = ref<DeezerTrack[] | null>(null);
</script>

<style lang="scss"></style>
