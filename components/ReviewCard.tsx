import Image from "next/image";

interface ReviewCardProps {
  title: string;
  artist: string;
  image: string;
}

export default function ReviewCard({ title, artist, image }: ReviewCardProps) {
  return (
    <div className="group flex flex-col gap-3">
      {/* Image Container - Enforces Square Aspect Ratio */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>
      
      {/* Text Content */}
      <div>
        <h3 className="font-bold text-zinc-900 leading-tight group-hover:underline decoration-zinc-400 underline-offset-4">
          {title}
        </h3>
        <p className="text-sm text-zinc-500">{artist}</p>
      </div>
    </div>
  );
}
