import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

type Data = {};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const code = req.query.code as string | null;

   if (!code) {
      res.redirect("/");
   }

   const token_request = await axios.get(
      "https://connect.deezer.com/oauth/access_token.php",
      {
         params: {
            app_id: process.env.DEEZER_APP_ID,
            secret: process.env.DEEZER_APP_SECRET,
            code,
            output: "json",
         },
      }
   );

   // Save Access token in cookies
   setCookie("deezer_token", token_request.data.access_token, {
      req,
      res,
      maxAge: token_request.data.expires ?? 3600,
   });

   res.redirect("/");
}
