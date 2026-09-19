import type { Anime } from "@/shared/types";
import { AnimeHero, AnimeInfo, AnimeScreenshots } from "@/widgets";
import styles from "./AnimeDetailsPage.module.css";

type Props = {
  anime: Anime;
};

export const AnimeDetailsPage = ({ anime }: Props) => {
  return (
    <main className={`page ${styles.page}`}>
      <AnimeHero anime={anime} />
      <AnimeInfo anime={anime} />
      <AnimeScreenshots screenshots={anime.screenshots}/>
    </main>
  );
};
