import React from "react";
import { cookies } from "next/headers";
import { Deezer } from "../include/axios";
import { CookiesTitles } from "../include/constants";
import { app_uri, authHeader, withToken } from "../include/utils";
import Link from "next/link";
import { DeezerUser } from "../include/types";

const DeezerUser = async ({}) => {
   const token = cookies().get(CookiesTitles.deezer)?.value;

   let user: DeezerUser | null = null;
   if (token) {
      user = await Deezer.get(withToken("/user/me", token))
         .then((x) => {
            console.log(x);
            return x.data as DeezerUser;
         })
         .catch((x) => {
            console.log(x);
            return null;
         });
   }

   return (
      <>
         {!token && (
            <Link
               href={{
                  pathname: "https://connect.deezer.com/oauth/auth.php",
                  query: {
                     response_type: "code",
                     app_id: process.env.DEEZER_APP_ID,
                     perms: [
                        "basic_access",
                        "email",
                        "manage_library",
                        "offline_access",
                     ].join(","),
                     redirect_uri: app_uri("/api/deezer/auth"),
                  },
               }}
            >
               Deezer
            </Link>
         )}
         {user && (
            <div>
               {user.name} <img src={user.picture} />
            </div>
         )}
      </>
   );
};

export default DeezerUser;
