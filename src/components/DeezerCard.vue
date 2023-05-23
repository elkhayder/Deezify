<template>
   <a v-if="!DeezerStore.user" :href="auth_link">Deezer</a>
   <h2 v-if="DeezerStore.user">Deezer: {{ DeezerStore.user.name }}</h2>
</template>

<script setup lang="ts">
import { APP_URI, DEEZER_APP_ID } from "@/include/constants";
import { useDeezerStore } from "@/stores/deezer";
import querystring from "querystring";

const auth_link =
   "https://connect.deezer.com/oauth/auth.php?" +
   querystring.stringify({
      app_id: DEEZER_APP_ID,
      response_type: "token",
      redirect_uri: APP_URI + "/auth/deezer",
      perms: ["email", "basic_access", "manage_library", "delete_library"].join(
         ","
      ),
   });

const DeezerStore = useDeezerStore();
</script>

<style lang="scss"></style>
