interface YouTubeEmbedProps {
  videoId: string;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Review Process Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
