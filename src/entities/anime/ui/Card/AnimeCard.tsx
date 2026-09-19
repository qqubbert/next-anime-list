import { Card, Rate, Tag, ConfigProvider } from "antd";
import Image from "next/image";
import type { Anime } from "@/shared/types/";

import styles from "./AnimeCard.module.css";
import Link from "next/link";

type Props = {
  anime: Anime;
};

export const AnimeCard = ({ anime }: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            bodyPadding: 0,
            colorBgContainer: "#555",
          },
          Rate: {
            starSize: 15,
          },
          Tag: {
            defaultBg: "#eee",
          },
        },
      }}
    >
      <Link
        href={`/anime/${anime.slug}`}
      >
        <Card
          variant="borderless"
          className={styles.card}
          hoverable
          cover={
            anime.coverImage ? (
              <div className={styles.imageWrapper}>
                <Image
                  loading="eager"
                  className={styles.image}
                  src={anime.coverImage}
                  alt={anime.title}
                  width={180}
                  height={270}
                />
              </div>
            ) : undefined
          }
        >
          <div className={styles.info}>
            <h3 className={styles.title}>{anime.title}</h3>

            <div className={styles.meta}>
              {anime.year && <Tag className={styles.tag}>{anime.year}</Tag>}

              {anime.type && <Tag className={styles.tag}>{anime.type}</Tag>}
            </div>

            {anime.rating !== null && (
              <div className={styles.rating}>
                <Rate disabled allowHalf value={anime.rating / 2} />

                <span className={styles.ratingValue}>
                  {anime.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </ConfigProvider>
  );
}
