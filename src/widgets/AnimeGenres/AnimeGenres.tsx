import { Flex, Tag } from "antd";
import { type Genre } from "@/shared/types/types";
import styles from "./AnimeGenres.module.css";

type Props = {
  genres: Genre[];
};

export const AnimeGenres = ({ genres }: Props) => {
  return (
    <Flex wrap gap={8}>
      {genres.map((genre) => (
        <Tag key={genre.id}>{genre.name}</Tag>
      ))}
    </Flex>
  );
};
