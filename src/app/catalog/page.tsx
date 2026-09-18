import { getAnime } from "@/entities/";
import { CatalogPage } from "@/views";

export default async function Catalog() {
  const anime = await getAnime();

  return <CatalogPage anime={anime} />;
}
