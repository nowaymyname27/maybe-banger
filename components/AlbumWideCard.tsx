import Image from "next/image";
import Link from "next/link";
import { Album } from "@/sanity/lib/queries";

interface AlbumWideCardProps {
  album: Album;
}

const RATING_ORDER = [
  "Banger",
  "Maybe Banger",
  "Good But Forgettable",
  "Eh",
  "Bad",
  "Terrible",
];

export default function AlbumWideCard({ album }: AlbumWideCardProps) {
  const linkHref = album.videoId
    ? `https://www.youtube.com/watch?v=${album.videoId}`
    : "#";

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md sm:flex-row">
      
      <div className="relative w-full shrink-0 border-r border-zinc-100 bg-zinc-100 sm:w-56">
        {/* We use aspect-square here to ensure it STARTS as a square. 
            If text overflows, the bg-zinc-100 covers the gap. */}
        <div className="aspect-square w-full relative">
            {album.coverImage && (
            <Image
                src={album.coverImage}
                alt={album.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 224px"
            />
            )}
        </div>
      </div>

      {/* MIDDLE: Info & Song Groups 
          p-3: Much tighter padding.
      */}
      <div className="flex flex-1 flex-col justify-center px-5">
        {/* Header: Tighter spacing */}
        <div className="mb-2 border-b border-zinc-100 pb-1">
          <h3 className="text-lg font-bold leading-none text-zinc-900">
            {album.title}
          </h3>
          <p className="text-sm font-medium text-zinc-500">{album.artist}</p>
        </div>

        {/* Grouped Song List: gap-0.5 for density */}
        <div className="flex flex-col gap-1 text-sm">
            {RATING_ORDER.map((ratingCategory) => {
                const songs = album.tracks?.filter(t => t.rating === ratingCategory);
                const hasSongs = songs && songs.length > 0;

                return (
                    <div key={ratingCategory} className="grid grid-cols-[auto_1fr] gap-2 items-baseline">
                        {/* The Label */}
                        <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${hasSongs ? 'text-zinc-800' : 'text-zinc-300'}`}>
                            {ratingCategory}:
                        </span>
                        
                        {/* The Songs */}
                        <span className="text-zinc-600 leading-tight">
                            {hasSongs ? (
                                songs.map(s => s.title).join(", ")
                            ) : (
                                <span className="text-zinc-200">-</span>
                            )}
                        </span>
                    </div>
                );
            })}
        </div>
      </div>

      {/* RIGHT: Score & Action 
          min-w-[180px]: Slightly narrower to save space.
      */}
      <div className="flex min-w-[180px] flex-col items-center justify-center gap-3 border-t border-zinc-100 bg-zinc-50/50 p-4 sm:border-l sm:border-t-0">
        
        <div className="text-center">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400 underline decoration-zinc-300 underline-offset-2 mb-1">
                Score (-5 to 5)
            </span>
            <div className="text-5xl font-black tracking-tighter text-zinc-900">
                {album.rating}
            </div>
            <div className="text-sm font-bold uppercase tracking-tight text-zinc-900 mt-1">
                {album.verdict}
            </div>
        </div>

        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-black active:scale-95 whitespace-nowrap"
        >
          Watch Review
        </Link>
      </div>
    </div>
  );
}
