import type { Anime } from "@/shared/types";
import { AnimeCard } from "@/entities/anime/ui/AnimeCard";

import styles from "./AnimeGrid.module.css";

type Props = {
  anime: Anime[];
};

export function AnimeGrid({ anime }: Props) {
  return (
    <div className={styles.grid}>
      {anime.map((item) => (
        <AnimeCard
          key={item.id}
          anime={item}
        />
      ))}
    </div>
  );
}