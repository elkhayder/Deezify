import React from "react";
import { cookies } from "next/headers";
import { Spotify } from "../include/axios";
import { CookiesTitles } from "../include/constants";
import { app_uri, authHeader } from "../include/utils";
import Link from "next/link";
import { SpotifyUser } from "../include/types";

type SpotifyUserPorps = {};

const SpotifyUser = async ({}) => {
   const token = cookies().get(CookiesTitles.spotify)?.value;

   let user: SpotifyUser | null = null;
   if (token) {
      user = await Spotify.get("/me", authHeader(token))
         .then((x) => x.data as SpotifyUser)
         .catch((x) => null);
   }

   return (
      <>
         {!token && (
            <Link
               href={{
                  pathname: "https://accounts.spotify.com/authorize",
                  query: {
                     response_type: "code",
                     client_id: process.env.SPOTIFY_APP_ID,
                     scope: [
                        "user-read-email",
                        "user-read-private",
                        "user-library-modify",
                        "user-library-read",
                        "playlist-read-private",
                        "playlist-read-collaborative",
                        "playlist-modify-private",
                        "playlist-modify-public",
                     ].join(" "),
                     redirect_uri: app_uri("/api/spotify/auth"),
                     show_dialog: true, // TODO: remove later
                  },
               }}
            >
               Spotify
            </Link>
         )}
         {user && (
            <div>
               {user.display_name} <img src={user.images[0].url} />
            </div>
         )}
      </>
   );
};

export default SpotifyUser;
