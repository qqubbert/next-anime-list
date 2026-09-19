import Image from "next/image";
import { Button, Flex, Rate, Tag } from "antd";
import styles from "./AnimeHero.module.css";
import { Anime } from "@/shared/types";
import { ImageWithPreview } from "@/shared/ui";

type Props = {
  anime: Anime;
}

export const AnimeHero = ({ anime }: Props) => {
  return (
    <section className={styles.hero}>
      {anime.bannerImage && (
        <Image className={styles.banner} src={anime.bannerImage} alt="" fill />
      )}

      <div className={styles.overlay} />

      <div className={styles.heroContent}>
        <div className={styles.poster}>
          {anime.coverImage && (
            <ImageWithPreview src={anime.coverImage} alt={anime.title} fill priority />
          )}
        </div>

        <div className={styles.mainInfo}>
          <h1 className={styles.title}>{anime.title}</h1>

          {anime.rating !== null && (
            <Flex align="center" gap={12}>
              <Rate disabled allowHalf value={anime.rating / 2} />

              <span className={styles.rating}>{anime.rating.toFixed(1)}</span>
            </Flex>
          )}

          <Flex wrap gap={8}>
            {anime.year && <Tag>{anime.year}</Tag>}

            <Tag>{anime.type}</Tag>

            <Tag>{anime.status}</Tag>

            {anime.episodes && <Tag>{anime.episodes} эп.</Tag>}
          </Flex>

          <p className={styles.description}>{anime.description}</p>

          <Button type="primary" className={styles.addToListBtn}>
            Добавить в список
          </Button>
        </div>
      </div>
    </section>
  );
};
