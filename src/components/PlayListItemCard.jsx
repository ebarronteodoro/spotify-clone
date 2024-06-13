import { CardPlayButton } from "./CardPlayButton";
import { usePlayerStore } from "@/store/playerStore";

const PlaylistCard = (playlist) => {
  const { id, cover, title, artists } = playlist.playlist;
  const { currentPlaylist, isPlaying } = usePlayerStore((state) => state);
  const artistsString = artists?.join(", ");

  return (
    <article className="group relative transition-all duration-300 hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-[#121212]/30 rounded-md">
      <div
        className={`absolute transition-all duration-500 right-4 bottom-20 translate-y-4 z-10 ${
          id == currentPlaylist?.playlist?.albumId && isPlaying
            ? "translate-y-2 opacity-100"
            : "opacity-0 group-hover:translate-y-2 group-hover:opacity-100"
        }`}
      >
        <CardPlayButton id={id} />
      </div>
      <a
        href={`/playlist/${id}`}
        className="playlist-item transition-all duration-300 flex relative p-2 h-full overflow-hidden gap-2 pb-2 w-40 flex-col"
      >
        <picture className="aspect-square w-full h-auto flex">
          <img
            src={cover}
            alt={`Cover of ${title} by ${artistsString}`}
            className="object-cover rounded-md size-36"
          />
        </picture>
        <div className="flex flex-auto flex-col px-2">
          <h4 className="text-white text-sm truncate">{title}</h4>
          <span className="text-xs text-gray-400/85">{artistsString}</span>
        </div>
      </a>
    </article>
  );
};

export default PlaylistCard;
