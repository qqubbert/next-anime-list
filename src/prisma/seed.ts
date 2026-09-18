import { db } from "./db";

async function main() {
  await db.orm.public.Anime.createAll([
    {
      title: "One Piece",
      slug: "one-piece",
      description: "Приключения Монки Д. Луффи и его команды.",
      coverImage: "/anime/one-piece.jpg",
      bannerImage: null,
      year: 1999,
      episodes: 1000,
      status: "ONGOING",
      type: "TV",
      rating: 8.9,
    },
    {
      title: "Attack on Titan",
      slug: "attack-on-titan",
      description: "Человечество пытается выжить за стенами.",
      coverImage: "/anime/attack-on-titan.jpg",
      bannerImage: null,
      year: 2013,
      episodes: 89,
      status: "FINISHED",
      type: "TV",
      rating: 9.0,
    },
    {
      title: "Chainsaw Man",
      slug: "chainsaw-man",
      description: "Дэндзи, демоны и бензопила вместо нормальной жизни.",
      coverImage: "/anime/chainsaw-man.jpg",
      bannerImage: null,
      year: 2022,
      episodes: 12,
      status: "FINISHED",
      type: "TV",
      rating: 8.5,
    },
  ]);
}

main()
  .then(() => {
    console.log("Database seeded");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });