import { db } from "@/prisma/db";

export const getAnimeBySlug = async (slug: string) => {
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
    .where((anime) => anime.slug.eq(slug))
    .first();
};