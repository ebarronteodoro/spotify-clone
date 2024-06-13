import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  currentPlaylist: { playlist: [] },
  volume: 1,
  currentSong: { song: [] },
  isCurrentSong: false,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setIsCurrentSong: (isCurrentSong) => set({ isCurrentSong }),
  playNextSong: () => {
    const {
      currentMusic,
      setCurrentSong,
      setIsPlaying,
      setCurrentMusic,
      setCurrentPlaylist,
    } = get();
    if (!currentMusic) return;

    const currentSongIndex = currentMusic.songs.findIndex(
      (song) => song.id === currentMusic.song.id
    );
    const nextSongIndex = currentSongIndex + 1;

    if (nextSongIndex < currentMusic.songs.length) {
      const nextSong = currentMusic.songs[nextSongIndex];
      setCurrentSong(nextSong);
      setCurrentMusic({ ...currentMusic, song: nextSong });
      setIsPlaying(true);
    } else {
      setCurrentSong(null);
      setCurrentMusic(null);
      setCurrentPlaylist(null);
      setIsPlaying(false);
    }
  },
}));
