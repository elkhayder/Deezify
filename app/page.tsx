import Link from "next/link";
import { app_uri } from "../include/utils";
import DeezerUser from "./DeezerUser";
import SpotifyUser from "./SpotifyUser";

export default function IndexPage() {
   return (
      <>
         {/* @ts-expect-error Server Component */}
         <SpotifyUser />
         {/* @ts-expect-error Server Component */}
         <DeezerUser />
      </>
   );
}
