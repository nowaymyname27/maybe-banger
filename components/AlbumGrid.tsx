import { Album } from "@/sanity/lib/queries";
import AlbumWideCard from "./AlbumWideCard"; // Import new component

interface AlbumGridProps {
  albums: Album[];
}

export default function AlbumGrid({ albums }: AlbumGridProps) {
  return (
    // Changed grid-cols to 1 because these are wide rows now
    <div className="grid grid-cols-1 gap-6">
      {albums.map((album) => (
        <AlbumWideCard key={album._id} album={album} />
      ))}
    </div>
  );
}
