import { notFound } from "next/navigation";
import { getAnimeBySlug } from "@/entities/anime/api/getAnimeBySlug";
import { AnimeDetailsPage } from "@/views";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AnimeDetails({ params }: Props) {
  const { slug } = await params;

  const anime = await getAnimeBySlug(slug);

  if (!anime) {
    notFound();
  }

  return <AnimeDetailsPage anime={anime} />;
}