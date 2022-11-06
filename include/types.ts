export type SpotifyUser = {
   display_name: string;
   images: SpotifyImage[];
};

export type SpotifyImage = {
   url: string;
   width?: number;
   height?: number;
};

export type DeezerUser = {
   name: string;
   firstname: string;
   lastname: string;
   email?: string;
   picture: string;
};
