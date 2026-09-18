import { Anime } from "@/shared/types";
import { AnimeGrid } from "@/widgets";

type Props = {
  anime: Anime[];
};

export const CatalogPage = ({ anime }: Props) => {
  return (
    <main className={`page`}>
      <h1>Каталог</h1>

      <AnimeGrid anime={anime} />
    </main>
  );
};
