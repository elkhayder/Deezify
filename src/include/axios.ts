import { useDeezerStore } from "@/stores/deezer";
import { useSpotifyStore } from "@/stores/spotify";
import axios from "axios";

export const Spotify = axios.create({
   baseURL: "https://api.spotify.com/v1",
});

Spotify.interceptors.request.use((config) => {
   const store = useSpotifyStore();

   if (store.token) {
      config.headers!["Authorization"] = `Bearer ${store.token}`;
   }

   return config;
});

/*******************/

export const Deezer = axios.create({
   baseURL:
      "https://private-no-cors-proxy.herokuapp.com/https://api.deezer.com/",
});

Deezer.interceptors.request.use((config) => {
   const store = useDeezerStore();

   if (store.token && config.url) {
      config.url += "?access_token=" + store.token;
   }

   return config;
});

Deezer.interceptors.response.use((res) => {
   if (res.data.error?.type == "OAuthException") {
      useDeezerStore().updateToken(null);
   }

   return res;
});
