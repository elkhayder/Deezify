<template>
   <a v-if="!SpotifyStore.user" :href="auth_link">Spotify</a>
   <h2 v-if="SpotifyStore.user">
      Spotify: {{ SpotifyStore.user.display_name }}
   </h2>
</template>

<script setup lang="ts">
import { APP_URI, SPOTIFY_APP_ID } from "@/include/constants";
import { useSpotifyStore } from "@/stores/spotify";
import querystring from "querystring";

const auth_link =
   "https://accounts.spotify.com/authorize?" +
   querystring.stringify({
      client_id: SPOTIFY_APP_ID,
      response_type: "token",
      redirect_uri: APP_URI + "/auth/spotify",
      scope: [
         "user-read-private",
         "user-library-read",
         "user-library-modify",
         "playlist-read-private",
         "playlist-read-collaborative",
      ].join(" "),
   });

const SpotifyStore = useSpotifyStore();
</script>

<style lang="scss"></style>
