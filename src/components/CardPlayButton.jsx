import { playlists, songs } from "@/lib/data";
import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";

export function CardPlayButton({ id, size = "small" }) {
  const {
    currentPlaylist,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setCurrentSong,
    setCurrentPlaylist,
  } = usePlayerStore((state) => state);
  const [isPlayingPlaylist, setIsPlayingPlaylist] = useState(false);

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(!isPlaying);
    } else {
      fetch(`/api/get-info-playlist.json?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;
          setCurrentMusic({ songs, playlist, song: songs[0] });
          setCurrentPlaylist({ playlist: playlist });
          setIsPlaying(true);
          setIsPlayingPlaylist(true);
        });
    }
  };

  useEffect(() => {
    setIsPlayingPlaylist(currentPlaylist?.playlist?.id === id);
  }, [currentPlaylist]);

  const iconClassName =
    size === "small" ? "w-4 h-4 text-black" : "w-5 h-5 text-black";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlayingPlaylist && isPlaying ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
