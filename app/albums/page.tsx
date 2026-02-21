import { getAlbums } from "@/sanity/lib/queries";
import AlbumListManager from "@/components/AlbumListManager";

export const revalidate = 60;

export default async function AlbumsPage() {
  const albums = await getAlbums();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900">
            All Reviews
        </h1>
        <p className="mt-2 text-zinc-500">
            Switch between visual cards or a detailed data table.
        </p>
      </div>

      {/* Pass data to the Client Component */}
      <AlbumListManager albums={albums} />
    </main>
  );
}
