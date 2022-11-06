import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { app_uri } from "../../../include/utils";
import querystring from "querystring";
import { setCookie } from "cookies-next";
import { CookiesTitles } from "../../../include/constants";

type Data = {};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const code = req.query.code as string | null;

   if (!code) {
      res.redirect("/");
   }

   const token_request = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
         code,
         grant_type: "authorization_code",
         redirect_uri: app_uri("/api/spotify/auth"),
      }),
      {
         headers: {
            Authorization: `Basic ${Buffer.from(
               `${process.env.SPOTIFY_APP_ID}:${process.env.SPOTIFY_APP_SECRET}`
            ).toString("base64")}`,
         },
      }
   );

   // TODO: Handle request failure

   // Save Access token in cookies
   setCookie(CookiesTitles.spotify, token_request.data.access_token, {
      req,
      res,
      maxAge: token_request.data.expires_in,
   });

   res.redirect("/");
}
