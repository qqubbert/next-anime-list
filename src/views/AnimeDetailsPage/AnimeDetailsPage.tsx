import { Button, Descriptions, Flex, Rate, Tag, ConfigProvider } from "antd";
import Image from "next/image";

import type { Anime } from "@/shared/types";

import styles from "./AnimeDetailsPage.module.css";

type Props = {
  anime: Anime;
};

export const AnimeDetailsPage = ({ anime }: Props) => {
  return (
    <main className={`page ${styles.page}`}>
      <section className={styles.hero}>
        {anime.bannerImage && (
          <Image
            className={styles.banner}
            src={anime.bannerImage}
            alt=""
            fill
          />
        )}

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={styles.poster}>
            {anime.coverImage && (
              <Image src={anime.coverImage} alt={anime.title} fill priority />
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

      <ConfigProvider
        theme={{
          components: {
            Descriptions: {
              labelColor: "#fff",
              contentColor: "#fff",
              titleColor: "#fff",
              margin: 0,
              itemPaddingEnd: 0,
            },
          },
        }}
      >
        <section className={styles.section}>
          <Descriptions
            className={styles.descriptions}
            title="Информация"
            column={{
              xs: 1,
              sm: 2,
              md: 4,
            }}
            items={[
              {
                key: "type",
                label: "Тип",
                children: anime.type,
              },
              {
                key: "status",
                label: "Статус",
                children: anime.status,
              },
              {
                key: "year",
                label: "Год",
                children: anime.year ?? "—",
              },
              {
                key: "episodes",
                label: "Эпизоды",
                children: anime.episodes ?? "—",
              },
            ]}
          />
        </section>
      </ConfigProvider>
    </main>
  );
};
