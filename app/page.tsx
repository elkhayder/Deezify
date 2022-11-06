import Link from "next/link";
import { app_uri } from "../include/utils";

export default function IndexPage() {
   return (
      <>
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
         <Link
            href={{
               pathname: "https://connect.deezer.com/oauth/auth.php",
               query: {
                  response_type: "code",
                  app_id: process.env.DEEZER_APP_ID,
                  perms: ["basic_access", "email", "manage_library"].join(","),
                  redirect_uri: app_uri("/api/deezer/auth"),
               },
            }}
         >
            Deezer
         </Link>
      </>
   );
}
