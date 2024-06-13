import { useEffect, useState } from "react";
import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function ListPlayButton({
  playlistId,
  songId,
  id,
  size = "small",
  className,
}) {
  const {
    currentMusic,
    currentPlaylist,
    currentSong,
    isPlaying,
    setCurrentSong,
    setIsPlaying,
    setCurrentMusic,
    setCurrentPlaylist,
  } = usePlayerStore((state) => state);
  const [isPlayingCurrentMusic, setIsPlayingCurrentMusic] = useState(false);

  const handleClick = () => {
    if (isPlayingCurrentMusic) {
      setIsPlaying(!isPlaying);
    } else {
      fetch(`/api/get-info-playlist.json?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;
          setCurrentSong(songs[songId]);
          setCurrentMusic({ songs, playlist, song: songs[songId] });
          setIsPlaying(true);
          setCurrentPlaylist({ playlist: playlist });
          setIsPlayingCurrentMusic(true);
        });
    }
  };

  useEffect(() => {
    if (
      currentMusic?.song?.id === songId &&
      currentPlaylist?.playlist?.id == playlistId
    ) {
      setIsPlayingCurrentMusic(true);
    } else {
      setIsPlayingCurrentMusic(false);
    }
  }, [currentMusic, songId]);

  const iconClassName =
    size === "small" ? "size-[12px] text-gray-300" : "size-5 text-gray-300";

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center ${className}`}
    >
      {isPlayingCurrentMusic && isPlaying ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
