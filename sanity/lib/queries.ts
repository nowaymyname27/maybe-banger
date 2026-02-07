import { groq } from "next-sanity";
import { client } from "./client";

// 1. The GROQ Query (The SQL of Sanity)
const albumsQuery = groq`*[_type == "album"] | order(publishedAt desc) {
  _id,
  title,
  artist,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  rating,
  verdict,
  "genre": genres[]->title,
  duration,
  videoId, // <-- Add this line
  publishedAt
}`;

export async function getLatestAlbums(): Promise<Album[]> {
  // Use two dots for inclusive (0, 1, 2)
  return client.fetch(
    groq`*[_type == "album"] | order(publishedAt desc)[0..2] {
      _id,
      title,
      artist,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      rating,
      verdict
    }`
  );
}

export interface Album {
  _id: string;
  title: string;
  artist: string;
  slug: string;
  coverImage: string;
  rating: number;
  verdict: string;
  genre: string[];
  duration: number;
  videoId: string; 
  publishedAt: string;
}

// 3. The Fetch Function
export async function getAlbums(): Promise<Album[]> {
  return client.fetch(albumsQuery);
}
