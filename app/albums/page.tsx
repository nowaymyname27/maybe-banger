import { getAlbums } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function AlbumsPage() {
  const albums = await getAlbums();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter text-zinc-900">
        All Reviews
      </h1>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => {
          // Construct the URL logic
          const linkHref = album.videoId 
            ? `https://www.youtube.com/watch?v=${album.videoId}`
            : "#"; // Fallback if no video ID

          return (
            <Link 
              href={linkHref} 
              key={album._id} 
              className="group"
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 mb-3">
                {album.coverImage && (
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />
                )}
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/70 backdrop-blur-md text-white font-bold text-xs">
                  {album.rating}
                </div>
              </div>

              <h2 className="text-lg font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                {album.title}
              </h2>
              <p className="text-zinc-500">{album.artist}</p>
              
              <div className="mt-2 inline-block px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase rounded-md">
                  {album.verdict}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
