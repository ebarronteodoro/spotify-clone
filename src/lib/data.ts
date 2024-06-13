import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
  creator: String;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Zketh",
    genre: "Dubstep",
    image: "https://i.scdn.co/image/ab67616100005174a32e9ac85c905921ec604953",
  },
];

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Weekend's Groove",
    color: colors.wine,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3a85a68713771a387a08d89ac",
    artists: ["Sløthy"],
    creator: "Sløthy",
  },
  {
    id: "2",
    albumId: 2,
    title: "la pleilis tryhard",
    color: colors.gray,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa36232c71ccdc6800089e3136b",
    artists: ["Sløthy"],
    creator: "Sløthy",
  },
  {
    id: "3",
    albumId: 3,
    title: "La salida del egoísta",
    color: colors.old_lavender,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3ff7fe64ae280870c99a0ba9f",
    artists: ["Halexu"],
    creator: "Halexu",
  },
  {
    id: "4",
    albumId: 4,
    title: "Yo resuelvo",
    color: colors.dark_rose,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3fcdc83e78d372b92c2524819",
    artists: ["Halexu"],
    creator: "Halexu",
  },
  {
    id: "5",
    albumId: 5,
    title: "La lista del papu full pro gaming house 2024 Bv",
    color: colors.blue,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3587135d9fb8320e843b3f81d",
    artists: ["Zketh"],
    creator: "Zketh",
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId?: number;
  title: string;
  image: string;
  artists: string[];
  album?: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 0,
    albumId: 1,
    title: "Blame It on the Boogie",
    image: `https://i.scdn.co/image/ab67616d00001e0286e5468d84ed66f06d9a799e`,
    artists: ["The Jacksons"],
    album: "Destiny",
    duration: "3:34",
  },
  {
    id: 1,
    albumId: 1,
    title: "P.Y.T (Pretty Young Thing)",
    image: `https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97`,
    artists: ["Michael Jackson"],
    album: "Thriller",
    duration: "3:59",
  },
  {
    id: 2,
    albumId: 1,
    title: "Rock with You - Single Version",
    image: `https://i.scdn.co/image/ab67616d00001e027027294551db4fda68b5ddac`,
    artists: ["Michael Jackson"],
    album: "Off the Wall",
    duration: "3:40",
  },
  {
    id: 0,
    albumId: 2,
    title: "Body Flicker",
    image: `https://i.scdn.co/image/ab67616d00001e02500c425f0de9fa3ac65c59f8`,
    artists: ["Dyatic", "BeutNoise"],
    album: "The Third Kind",
    duration: "3:39",
  },
  {
    id: 1,
    albumId: 2,
    title: "Potions",
    image: `https://i.scdn.co/image/ab67616d00001e02ca7251a371a873fb60901c38`,
    artists: ["Chime"],
    album: "Potions",
    duration: "3:05",
  },
  {
    id: 2,
    albumId: 2,
    title: "Forever",
    image: `https://i.scdn.co/image/ab67616d0000485180a4d5a046b4942f7cefc7ff`,
    artists: ["Vanatice", "Miss Lina"],
    album: "Forever",
    duration: "4:53",
  },
  {
    id: 3,
    albumId: 2,
    title: "Waiting",
    image: `https://i.scdn.co/image/ab67616d00001e0217ce56646acbd6606b002717`,
    artists: ["MIKESH!FT", "KERO"],
    album: "Waiting",
    duration: "4:00",
  },
  {
    id: 0,
    albumId: 3,
    title: "Relaxed Scene",
    image: `https://i.scdn.co/image/ab67616d00001e02c8c0630072c1301bc8ae7a1f`,
    artists: ["James Clarke"],
    album: "Mystery Movie",
    duration: "1:37",
  },
  {
    id: 0,
    albumId: 4,
    title: "Sexo Virtual",
    image: `https://i.scdn.co/image/ab67616d00001e02d9525f27b0a9e25b1fa21230`,
    artists: ["Rauw Alejandro"],
    album: "VICE VERSA",
    duration: "3:28",
  },
  {
    id: 1,
    albumId: 4,
    title: "Addiction",
    image: `https://i.scdn.co/image/ab67616d00004851f14aa81116510d3a6df8432b`,
    artists: ["Doja Cat"],
    album: "Hot Pink",
    duration: "3:28",
  },
  {
    id: 0,
    albumId: 5,
    title: "Roxanne",
    image: `https://i.scdn.co/image/ab67616d000048512043dd3544a339547d04b436`,
    artists: ["The Police"],
    album: "Outlandos D'Amour (Remastered 2003)",
    duration: "3:11",
  },
];
