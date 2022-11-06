import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { app_uri } from "../../../include/utils";
import querystring from "querystring";

type Data = {};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const token = req.cookies.spotify_token;

   if (!token)
      res.status(401).json({
         error: "No token provided",
      });
}
