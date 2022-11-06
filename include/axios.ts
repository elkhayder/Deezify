import axios, { AxiosInstance } from "axios";

export const Spotify = axios.create({
   baseURL: "https://api.spotify.com/v1",
});

export const Deezer = axios.create({
   baseURL: "https://api.deezer.com",
});
