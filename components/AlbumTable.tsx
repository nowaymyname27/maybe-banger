"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Album } from "@/sanity/lib/queries";

interface AlbumTableProps {
  albums: Album[];
}

const RATING_ORDER = [
  "Banger",
  "Maybe Banger",
  "Good But Forgettable",
  "Eh",
  "Bad",
  "Terrible",
];

export default function AlbumTable({ albums }: AlbumTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
      {/* Table Header 
          Updated Grid Cols: Chevron (40px) is first now.
      */}
      <div className="min-w-[600px] grid grid-cols-[40px_60px_2fr_1.5fr_100px_80px] items-center gap-4 bg-zinc-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-200">
        <div></div> {/* Spacer for Chevron */}
        <div>Cover</div>
        <div>Title</div>
        <div>Artist</div>
        <div className="text-center">Rating</div>
        <div className="text-center">Link</div>
      </div>

      <div className="divide-y divide-zinc-100 min-w-[600px]">
        {albums.map((album) => (
          <AlbumRow key={album._id} album={album} />
        ))}
      </div>
    </div>
  );
}

function AlbumRow({ album }: { album: Album }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkHref = album.videoId
    ? `https://www.youtube.com/watch?v=${album.videoId}`
    : "#";

  return (
    <div className="group bg-white transition-colors hover:bg-zinc-50/50">
      {/* Main Row Content */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="grid grid-cols-[40px_60px_2fr_1.5fr_100px_80px] items-center gap-4 px-4 py-3 cursor-pointer"
      >
        {/* 1. Chevron (Now First) */}
        <div className="flex justify-center text-zinc-400 group-hover:text-zinc-600">
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>

        {/* 2. Cover */}
        <div className="relative h-12 w-12 overflow-hidden rounded-md bg-zinc-100">
          {album.coverImage && (
            <Image
              src={album.coverImage}
              alt={album.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* 3. Title */}
        <div className="font-bold text-zinc-900 truncate pr-2">
          {album.title}
        </div>

        {/* 4. Artist */}
        <div className="font-medium text-zinc-500 truncate">
          {album.artist}
        </div>

        {/* 5. Rating */}
        <div className="text-center flex flex-col items-center justify-center leading-none">
          <span className="font-black text-zinc-900 text-lg">{album.rating}</span>
          <span className="text-[9px] uppercase font-bold text-zinc-400 mt-0.5">{album.verdict}</span>
        </div>

        {/* 6. Link */}
        <div className="flex justify-center">
            <Link
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="p-2 text-zinc-400 hover:text-red-600 transition-colors"
            >
                <ExternalLink size={16} />
            </Link>
        </div>
      </div>

      {/* Expanded Accordion Details */}
      {isOpen && (
        <div className="bg-zinc-50/50 px-6 py-6 border-t border-zinc-100 shadow-inner">
           {/* Indent content slightly to align visually with title */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm pl-14">
              {RATING_ORDER.map((ratingCategory) => {
                  const songs = album.tracks?.filter(t => t.rating === ratingCategory);
                  if (!songs || songs.length === 0) return null;

                  return (
                      <div key={ratingCategory} className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                              {ratingCategory}
                          </span>
                          <div className="flex flex-col gap-1">
                              {songs.map(song => (
                                  <span key={song._key} className="text-zinc-700 font-medium">
                                      {song.title}
                                  </span>
                              ))}
                          </div>
                      </div>
                  );
              })}
              {(!album.tracks || album.tracks.length === 0) && (
                  <p className="text-zinc-400 italic text-xs">No songs rated for this album.</p>
              )}
           </div>
        </div>
      )}
    </div>
  );
}
