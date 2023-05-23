import { ref } from "vue";
import { defineStore } from "pinia";
import { Deezer } from "@/include/axios";
import type { DeezerUser } from "@/include/types";

const LOCAL_STORAGE = "deezer_token";

export const useDeezerStore = defineStore("Deezer", () => {
   const token = ref<String | null>(null);
   const user = ref<DeezerUser | null>(null);

   async function updateToken(value: string | null) {
      token.value = value;

      if (value) {
         localStorage.setItem(LOCAL_STORAGE, value);
         const req = await Deezer.get("/user/me");
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
