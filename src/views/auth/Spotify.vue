<template></template>

<script setup lang="ts">
import { useSpotifyStore } from "@/stores/spotify";
import { useRouter } from "vue-router";
import { hashParams } from "../../include/utils";

const code = hashParams().get("access_token");

if (code) {
   useSpotifyStore().updateToken(code);
   useRouter().push("/");
}
</script>

<style lang="scss"></style>
