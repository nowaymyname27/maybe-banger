"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Album } from "@/sanity/lib/queries";
import AlbumGrid from "./AlbumGrid";
import AlbumTable from "./AlbumTable";

interface AlbumListManagerProps {
  albums: Album[];
}

export default function AlbumListManager({ albums }: AlbumListManagerProps) {
  // Changed default to "table"
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");

  return (
    <div className="flex flex-col gap-6">
      {/* Controls Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
        <span className="text-sm font-medium text-zinc-500">
          Showing {albums.length} albums
        </span>
        <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
            <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-all ${
                    viewMode === "table" 
                    ? "bg-white text-zinc-900 shadow-sm" 
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
                title="Table View"
            >
                <List size={18} />
            </button>
            <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                    viewMode === "grid" 
                    ? "bg-white text-zinc-900 shadow-sm" 
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
                title="Card View"
            >
                <LayoutGrid size={18} />
            </button>
        </div>
      </div>

      <div className="animate-in fade-in zoom-in-95 duration-300">
        {viewMode === "grid" ? (
            <AlbumGrid albums={albums} />
        ) : (
            <AlbumTable albums={albums} />
        )}
      </div>
    </div>
  );
}
