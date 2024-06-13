import { usePlayerStore } from "@/store/playerStore";
import { useRef, useEffect, useState } from "react";
import { Slider } from "./Slider";

export const Pause = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const SkipBack = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
);

export const SkipForward = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className="flex items-center gap-3 relative overflow-hidden">
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const {
    currentMusic,
    isPlaying,
    currentPlaylist,
    isCurrentSong,
    setCurrentMusic,
    setIsPlaying,
    setCurrentPlaylist,
    setIsCurrentSong,
  } = usePlayerStore((state) => state);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Estado para la duración
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // Nuevo estado para controlar si el slider está siendo movido

  // Referencias para mantener el valor actual de los props sin necesidad de re-suscribirse
  const currentMusicRef = useRef(currentMusic);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    currentMusicRef.current = currentMusic;
    isPlayingRef.current = isPlaying;
  }, [currentMusic, isPlaying]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!isSliding) {
        // Solo actualiza el tiempo si no se está moviendo el slider
        setCurrentTime(audio.current.currentTime);
        setTimeLeft(duration - audio.current.currentTime);
        if (isPlayingRef.current && currentMusicRef.current.song) {
          document.title = `${
            currentMusicRef.current.song.title
          } • ${currentMusicRef.current.song.artists.join(", ")}`;
        } else {
          document.title = "Spotify Clone";
          if (!currentMusicRef.current?.song && !isPlayingRef.current) {
            setDuration(0);
            setIsPlaying(false);
            setCurrentTime(0);
            setTimeLeft(null);
          }
        }
      }
    };

    // Actualizamos la duración cuando se carga la canción
    const handleLoadedMetadata = () => {
      setDuration(audio.current.duration);
      if (!currentMusicRef.current?.song && !isPlayingRef.current) {
        setDuration(0);
        setCurrentTime(0);
        setTimeLeft(null);
      }
    };

    const handleEnded = () => {
      let currentIndex = currentMusicRef.current?.songs.findIndex(
        (song) => song.id === currentMusicRef.current?.song?.id
      );
      if (
        currentIndex !== -1 &&
        currentIndex + 1 < currentMusicRef.current?.songs.length
      ) {
        const nextIndex = currentIndex + 1;
        const nextSong = currentMusicRef.current?.songs[nextIndex];
        setCurrentMusic({ ...currentMusicRef.current, song: nextSong });
        audio.current.currentTime = 0;
        setIsPlaying(true);
        setIsCurrentSong(true);
        audio.current.play();
      } else {
        audio.current.src = "";
        setIsPlaying(false);
        setCurrentPlaylist({ playlist: null });
        setCurrentMusic({
          ...currentMusicRef.current,
          song: null,
        });
        setIsCurrentSong(false);
      }
    };

    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    audio.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.current.addEventListener("ended", handleEnded);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
      audio.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.current.removeEventListener("ended", handleEnded);
    };
  }, [audio, duration, isSliding]);

  const formatTime = (time) => {
    if (time == null) return "0:00";

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex gap-x-3 text-xs pt-1">
      <span className="opacity-50 w-12 text-right">
        {formatTime(currentTime)}
      </span>
      <Slider
        defaultValue={[0]}
        value={[duration - timeLeft < duration && timeLeft ? currentTime : 0]}
        max={duration}
        min={0}
        className="w-[400px]"
        onValueChange={(value) => {
          setCurrentTime(value);
          timeLeft > 0
            ? setTimeLeft(duration - currentTime)
            : setTimeLeft(null);
        }}
        onPointerDown={() => setIsSliding(true)}
        onPointerUp={() => {
          setIsSliding(false);
          duration - timeLeft < duration && timeLeft
            ? (audio.current.currentTime = currentTime)
            : setTimeLeft(null);
        }}
      />
      <span className="opacity-50 w-12">
        {timeLeft || timeLeft != 0 ? `-${formatTime(timeLeft)}` : "-0:00"}
      </span>
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilenced = volume === 0;

  const handleClickVolume = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  useEffect(() => {
    if (!isVolumeSilenced) {
      previousVolumeRef.current = volume;
    }

    const handleKeyPress = (event) => {
      if (event.code === "KeyM") {
        event.preventDefault();
        handleClickVolume();
        window.removeEventListener("keyup", handleKeyPress);
      }
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [volume, isVolumeSilenced]);

  return (
    <div className="flex justify-center gap-x-2 text-white">
      <button
        className="opacity-70 hover:opacity-100 transition"
        onClick={handleClickVolume}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[0]}
        value={[volume * 100]}
        max={100}
        min={0}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

export function Player() {
  const {
    currentMusic,
    currentSong,
    isPlaying,
    setIsPlaying,
    isCurrentSong,
    setIsCurrentSong,
    setCurrentSong,
    volume,
    setVolume,
    setCurrentMusic,
  } = usePlayerStore((state) => state);

  const audioRef = useRef();

  const handleClickSkipBack = () => {
    if (!audioRef.current || !audioRef.current.src || !isPlaying) return;

    let currentIndex = currentMusic?.songs.findIndex(
      (song) => song.id === currentMusic?.song.id
    );

    if (currentIndex !== -1 && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevSong = currentMusic?.songs[prevIndex];
      setCurrentMusic({ ...currentMusic, song: prevSong });
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleClickSkipForward = () => {
    if (!audioRef.current || !audioRef.current.src || !isPlaying) return;

    let currentIndex = currentMusic?.songs.findIndex(
      (song) => song.id === currentMusic?.song.id
    );

    if (currentIndex !== -1 && currentIndex + 1 < currentMusic?.songs.length) {
      const nextIndex = currentIndex + 1;
      const nextSong = currentMusic?.songs[nextIndex];
      setCurrentMusic({ ...currentMusic, song: nextSong });

      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {}, [isPlaying, currentMusic]);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        setIsPlaying(!isPlaying);
        window.removeEventListener("keyup", handleKeyPress);
      }
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
      setCurrentSong(song);
      setIsCurrentSong(true);
    }
  }, [currentMusic]);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-1 z-50 relative">
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="grid place-content-center gap-4 flex-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center flex-col items-center">
          <audio ref={audioRef} />
          <div className="flex justify-center gap-7">
            <button onClick={handleClickSkipBack}>
              <SkipBack className="opacity-70 hover:opacity-100 transition duration-200" />
            </button>
            <button
              className={`bg-white rounded-full transition duration-200 scale-95 p-2 ${
                !isCurrentSong
                  ? !isPlaying
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-100"
                  : ""
              }`}
              onClick={isCurrentSong ? handleClick : null}
            >
              {isPlaying ? (
                <Pause className="text-black" />
              ) : (
                <Play className="text-black" />
              )}
            </button>
            <button onClick={handleClickSkipForward}>
              <SkipForward className="opacity-70 hover:opacity-100 transition duration-200" />
            </button>
          </div>
          <SongControl audio={audioRef} />
        </div>
      </div>

      <div className="grid place-content-center">
        <VolumeControl />
      </div>
    </div>
  );
}
