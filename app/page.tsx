import YouTubeEmbed from "@/components/YouTubeEmbed";
import ReviewCard from "@/components/ReviewCard";
import { getLatestAlbums } from "@/sanity/lib/queries"; // Import the fetcher
import Link from "next/link"; // We need this to make cards clickable

// Add revalidation so homepage updates automatically
export const revalidate = 60; 

export default async function Home() {
  // Fetch the 3 newest albums from Sanity
  const latestAlbums = await getLatestAlbums();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl text-left font-bold tracking-tighter text-zinc-900 sm:text-5xl">
        Check Out The Latest Review
      </h1>
      
      <div className="mt-6">
        <YouTubeEmbed videoId="T1PF41Plx0M" />
      </div>

      <section>
        <div className="flex items-center justify-between my-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Latest Reviews
          </h2>
          <Link href="/albums" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {latestAlbums.map((album) => (
            // Wrap the card in a Link so it goes to the review page
            <Link href={`/albums/${album.slug}`} key={album._id}>
              <ReviewCard
                title={album.title}
                artist={album.artist}
                // Fallback image in case coverImage is missing
                image={album.coverImage || "/placeholder.jpg"} 
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
