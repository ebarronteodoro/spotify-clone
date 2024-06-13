import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";

export const Playing = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M10.016 1.125A.75.75 0 0 0 8.99.85l-6.925 4a3.639 3.639 0 0 0 0 6.299l6.925 4a.75.75 0 0 0 1.125-.65v-13a.75.75 0 0 0-.1-.375zM11.5 5.56a2.75 2.75 0 0 1 0 4.88V5.56z"></path>
    <path d="M16 8a5.752 5.752 0 0 1-4.5 5.614v-1.55a4.252 4.252 0 0 0 0-8.127v-1.55A5.752 5.752 0 0 1 16 8z"></path>
  </svg>
);

const SideMenuCard = ({ playlist }) => {
  const { id, cover, title, artists } = playlist;
  const artistsString = artists.join(", ");
  const { currentMusic, isPlaying } = usePlayerStore((state) => state);
  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
    if (currentMusic?.song?.albumId) {
      setPlaylistId(currentMusic.song.albumId);
    }
  }, [currentMusic, id]);

  return (
    <a
      href={`/playlist/${id}`}
      className="playlist-item flex relative py-2 overflow-hidden items-center gap-5 rounded-md px-5 hover:bg-zinc-800"
    >
      <picture className="size-14 flex">
        <img
          src={cover}
          alt={`Cover of ${title} by ${artistsString}`}
          className="rounded-md size-14 max-h-14 max-w-14"
        />
      </picture>

      <div className="flex justify-between items-center w-full gap-3 overflow-hidden">
        <div className="flex flex-auto flex-col truncate">
          <h4
            className={`${
              id == playlistId && currentMusic?.song?.albumId
                ? "text-green-500"
                : "text-white"
            } text-base truncate`}
          >
            {title}
          </h4>

          <span className="text-sm text-gray-400/85 truncate">
            Lista • {artists[0]}
          </span>
        </div>
        {id == playlistId && isPlaying ? (
          <span className="flex items-center justify-center w-8">
            <Playing className={"size-4 text-green-500"} />
          </span>
        ) : (
          ""
        )}
      </div>
    </a>
  );
};

export default SideMenuCard;
