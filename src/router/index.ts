import { createRouter, createWebHistory } from "vue-router";
import IndexVue from "@/views/Index.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "Index",
         component: IndexVue,
      },
      {
         path: "/auth/spotify",
         name: "Spotify Auth",
         component: () => import("../views/auth/Spotify.vue"),
      },
      {
         path: "/auth/deezer",
         name: "Deezer Auth",
         component: () => import("../views/auth/Deezer.vue"),
      },
   ],
});

export default router;
