import { ref } from "vue";
import { defineStore } from "pinia";
import { Spotify } from "@/include/axios";
import type { SpotifyImage, SpotifyUser } from "@/include/types";

const LOCAL_STORAGE = "spotify_token";

export const useSpotifyStore = defineStore("Spotify", () => {
   const token = ref<String | null>(null);
   const user = ref<SpotifyUser | null>(null);

   async function updateToken(value: string | null) {
      token.value = value;

      if (value) {
         localStorage.setItem(LOCAL_STORAGE, value);
         const req = await Spotify.get("/me");
         user.value = req.data;
      } else {
         user.value = null;
      }
   }

   function fetchFromStorage() {
      let token = localStorage.getItem(LOCAL_STORAGE);
      if (token) updateToken(token);
   }

   return { token, user, updateToken, fetchFromStorage };
});
