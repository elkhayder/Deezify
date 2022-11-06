export function app_uri(link: string): string {
   return process.env.NEXT_PUBLIC_APP_URI + link;
}

export const authHeader = (token: string) => {
   return {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
};

export const withToken = (url: string, token: string) => {
   return url + "?access_token=" + token;
};
