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
  {
    id: 2,
    title: "MOTOMAMI",
    artist: "Rosalia",
    image: "/albums/MOTOMAMI.jpg",
  },
  {
    id: 2,
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    image: "/albums/GKMC.jpg",
  },
  ];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl text-left font-bold tracking-tighter text-zinc-900 sm:text-5xl">
        Check Out The Latest Review
      </h1>
      {/* Pass your specific video ID here */}
      <div className="mt-6">
        <YouTubeEmbed videoId="T1PF41Plx0M" />
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
