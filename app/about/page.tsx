import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl text-left font-bold tracking-tighter text-zinc-900 sm:text-5xl">
        How I Review Music
      </h1>
      {/* Pass your specific video ID here */}
      <div className="mt-6">
        <YouTubeEmbed videoId="MxUlu4pPtRw" />
      </div>
    </main>
  );
}
