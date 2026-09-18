import { db } from "@/prisma/db";

export const getAnime = async () => {
  return db.orm.public.Anime
    .select(
      "id",
      "title",
      "slug",
      "description",
      "coverImage",
      "bannerImage",
      "year",
      "episodes",
      "status",
      "type",
      "rating",
    )
    .all();
};