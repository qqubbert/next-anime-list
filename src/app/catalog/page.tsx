import { Row, Col } from "antd";

import { getAnime, AnimeCard } from "@/entities/";

export default async function CatalogPage() {
  const anime = await getAnime();

  return (
    <main className={`page`}>
      <h1>Каталог</h1>

      <Row gutter={[16, 16]}>
        {anime.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={8}
            md={6}
            lg={4}
          >
            <AnimeCard anime={item} />
          </Col>
        ))}
      </Row>
    </main>
  );
}