import React, { useEffect } from "react";
import { usePlayerStore } from "@/store/playerStore";
import { ListPlayButton } from "./ListPlayButton";

export const Time = () => (
  <svg
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
  </svg>
);

const MusicsTable = ({ songs, playlistId }) => {
  const { currentMusic, isPlaying, playNextSong } = usePlayerStore(
    (state) => state
  );

  return (
    <table className="text-left min-w-full divide-y divide-gray-500/50">
      <thead>
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light text-center">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="px-4 py-2 font-light">Álbum</th>
          <th className="px-4 py-2 font-light">
            <Time />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-3"></tr>
        {songs.map((song, index) => (
          <tr
            key={song.id}
            className="text-gray-300 text-sm font-light group hover:bg-white/10 transition duration-150"
          >
            <td className="px-4 py-2 rounded-l-lg w-5 align-middle text-center relative">
              <span
                className={`${
                  currentMusic?.playlist?.id == playlistId &&
                  currentMusic?.song?.id === song.id
                    ? "text-green-500"
                    : "text-gray-300"
                } transition duration-150 group-hover:opacity-0 text-center pointer-events-none`}
              >
                {isPlaying &&
                currentMusic?.playlist?.id == playlistId &&
                currentMusic?.song?.id === song.id ? (
                  <img
                    src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
                    alt=""
                  />
                ) : (
                  index + 1
                )}
              </span>
              <ListPlayButton
                id={playlistId}
                playlistId={playlistId}
                songId={index}
                size="small"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[1px] mb-[1px] transition duration-150 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto text-gray-300"
              />
            </td>
            <td className="px-4 py-2 flex gap-3">
              <picture>
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-11 h-11 rounded"
                />
              </picture>
              <div className="flex flex-col">
                <h3
                  className={`${
                    currentMusic?.playlist?.id == playlistId &&
                    currentMusic?.song?.id === song.id
                      ? "text-green-500"
                      : "text-white"
                  } text-base font-normal`}
                >
                  {song.title}
                </h3>
                <span className="opacity-60 group-hover:opacity-100">
                  {song.artists.join(", ")}
                </span>
              </div>
            </td>
            <td className="px-4 py-2">{song.album}</td>
            <td className="px-4 py-2 rounded-r-lg">{song.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MusicsTable;
