<template></template>

<script setup lang="ts">
import { useDeezerStore } from "@/stores/deezer";
import { useRouter } from "vue-router";
import { hashParams } from "../../include/utils";

const code = hashParams().get("access_token");

if (code) {
   useDeezerStore().updateToken(code);
   useRouter().push("/");
}
</script>

<style lang="scss"></style>
