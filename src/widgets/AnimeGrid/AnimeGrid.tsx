import { Flex } from "antd";

import type { Anime } from "@/shared/types";
import { AnimeCard } from "@/entities/anime/ui/Card/AnimeCard";

type Props = {
  anime: Anime[];
};


export function AnimeGrid({ anime }: Props) {
  return (
    <Flex wrap gap={20}>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </Flex>
  );
}