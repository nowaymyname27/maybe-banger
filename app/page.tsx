import YouTubeEmbed from "@/components/YouTubeEmbed";
import ReviewCard from "@/components/ReviewCard";

// Mock Data - Exactly 3 albums
const LATEST_ALBUMS = [
  {
    id: 1,
    title: "CAPRISONGS",
    artist: "FKA Twigs",
    image: "/albums/CAPRISONGS.jpg",
  },
  ];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl text-center font-bold tracking-tighter text-zinc-900 sm:text-5xl">
        How I Review Music Here at Maybe Banger
      </h1>
      {/* Pass your specific video ID here */}
      <div className="mt-6">
        <YouTubeEmbed videoId="dQw4w9WgXcQ" />
      </div>

       {/* Latest Reviews Section */}
      <section>
        <h2 className="my-6 text-2xl font-bold tracking-tight text-zinc-900">
          Latest Reviews
        </h2>
        
        {/* The Grid: 1 column mobile, 3 columns desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {LATEST_ALBUMS.map((album) => (
            <ReviewCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              image={album.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
