// Spotify

export type SpotifyUser = {
   display_name: string;
   images: SpotifyImage[];
};

export type SpotifyImage = {
   url: string;
   width?: number;
   height?: number;
};

export type SpotifyArtist = {
   name: string;
};

export type SpotifyTrack = {
   name: string;
   artists: SpotifyArtist[];
};

// Deezer

export type DeezerUser = {
   id: number;
   name: string;
};

export type DeezerTrack = {
   id: number;
   title: string;
   link: string;
   artist: DeezerArtist;
};

export type DeezerArtist = {
   id: number;
   name: string;
   picture: string;
};
