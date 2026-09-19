import { ConfigProvider, Descriptions } from "antd";
import styles from "./AnimeInfo.module.css";
import { Anime } from "@/shared/types";

type Props = {
  anime: Anime;
}

export const AnimeInfo = ({ anime }: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Descriptions: {
            labelColor: "#fff",
            contentColor: "#fff",
            titleColor: "#fff",
            margin: 0,
            itemPaddingEnd: 0,
            itemPaddingBottom: 0,
          },
        },
      }}
    >
      <section className={styles.section}>
        <Descriptions
          className={styles.descriptions}
          title="Информация"
          // bordered
          column={4}
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
  );
};
