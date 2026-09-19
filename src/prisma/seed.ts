import { db } from "./db";

async function main() {
  /*
   * Очищаем данные в правильном порядке из-за foreign keys.
   * Это подходит именно для development seed.
   */

  await db.orm.public.AnimeCharacter.where({}).deleteAll();
  await db.orm.public.AnimeGenre.where({}).deleteAll();
  await db.orm.public.AnimeStudio.where({}).deleteAll();
  await db.orm.public.Screenshot.where({}).deleteAll();

  await db.orm.public.Character.where({}).deleteAll();
  await db.orm.public.Studio.where({}).deleteAll();
  await db.orm.public.Genre.where({}).deleteAll();
  await db.orm.public.Anime.where({}).deleteAll();

  /*
   * Anime
   */

  const anime = await db.orm.public.Anime.createAll([
    {
      title: "One Piece",
      slug: "one-piece",
      description:
        "Монки Д. Луффи отправляется в плавание, чтобы найти величайшее сокровище и стать Королём пиратов.",
      coverImage: "/anime/one-piece/cover.jpg",
      bannerImage: "/anime/one-piece/banner.jpg",
      year: 1999,
      episodes: 1000,
      status: "ONGOING",
      type: "TV",
      rating: 8.9,
    },
    {
      title: "Attack on Titan",
      slug: "attack-on-titan",
      description:
        "Человечество скрывается за огромными стенами, пытаясь выжить в мире, где за их пределами обитают титаны.",
      coverImage: "/anime/attack-on-titan/cover.jpg",
      bannerImage: "/anime/attack-on-titan/banner.jpg",
      year: 2013,
      episodes: 89,
      status: "FINISHED",
      type: "TV",
      rating: 9.0,
    },
    {
      title: "Chainsaw Man",
      slug: "chainsaw-man",
      description:
        "Дэндзи живёт в нищете и охотится на демонов, чтобы расплатиться с долгами. После трагических событий его жизнь полностью меняется.",
      coverImage: "/anime/chainsaw-man/cover.jpg",
      bannerImage: "/anime/chainsaw-man/banner.jpg",
      year: 2022,
      episodes: 12,
      status: "FINISHED",
      type: "TV",
      rating: 8.5,
    },
  ]);

  /*
   * Genres
   */

  const genres = await db.orm.public.Genre.createAll([
    { name: "Action" },
    { name: "Adventure" },
    { name: "Comedy" },
    { name: "Drama" },
    { name: "Fantasy" },
    { name: "Horror" },
    { name: "Mystery" },
    { name: "Shounen" },
  ]);

  const genreByName = new Map(genres.map((genre) => [genre.name, genre]));

  /*
   * Studios
   */

  const studios = await db.orm.public.Studio.createAll([
    { name: "Toei Animation" },
    { name: "WIT Studio" },
    { name: "MAPPA" },
  ]);

  const studioByName = new Map(studios.map((studio) => [studio.name, studio]));

  /*
   * Characters
   */

  const characters = await db.orm.public.Character.createAll([
    {
      name: "Monkey D. Luffy",
      imageUrl: "/anime/one-piece/characters/luffy.jpg",
      role: "Main",
    },
    {
      name: "Roronoa Zoro",
      imageUrl: "/anime/one-piece/characters/zoro.jpg",
      role: "Main",
    },
    {
      name: "Nami",
      imageUrl: "/anime/one-piece/characters/nami.jpg",
      role: "Main",
    },
    {
      name: "Eren Yeager",
      imageUrl: "/anime/attack-on-titan/characters/eren.jpg",
      role: "Main",
    },
    {
      name: "Mikasa Ackerman",
      imageUrl: "/anime/attack-on-titan/characters/mikasa.jpg",
      role: "Main",
    },
    {
      name: "Armin Arlert",
      imageUrl: "/anime/attack-on-titan/characters/armin.jpg",
      role: "Main",
    },
    {
      name: "Denji",
      imageUrl: "/anime/chainsaw-man/characters/denji.jpg",
      role: "Main",
    },
    {
      name: "Power",
      imageUrl: "/anime/chainsaw-man/characters/power.jpg",
      role: "Main",
    },
    {
      name: "Makima",
      imageUrl: "/anime/chainsaw-man/characters/makima.jpg",
      role: "Main",
    },
  ]);

  const characterByName = new Map(
    characters.map((character) => [character.name, character]),
  );

  /*
   * Связи Anime ↔ Genre
   */

  const onePiece = anime.find((item) => item.slug === "one-piece")!;

  const attackOnTitan = anime.find((item) => item.slug === "attack-on-titan")!;

  const chainsawMan = anime.find((item) => item.slug === "chainsaw-man")!;

  await db.orm.public.AnimeGenre.createAll([
    {
      animeId: onePiece.id,
      genreId: genreByName.get("Action")!.id,
    },
    {
      animeId: onePiece.id,
      genreId: genreByName.get("Adventure")!.id,
    },
    {
      animeId: onePiece.id,
      genreId: genreByName.get("Fantasy")!.id,
    },
    {
      animeId: onePiece.id,
      genreId: genreByName.get("Shounen")!.id,
    },

    {
      animeId: attackOnTitan.id,
      genreId: genreByName.get("Action")!.id,
    },
    {
      animeId: attackOnTitan.id,
      genreId: genreByName.get("Drama")!.id,
    },
    {
      animeId: attackOnTitan.id,
      genreId: genreByName.get("Fantasy")!.id,
    },
    {
      animeId: attackOnTitan.id,
      genreId: genreByName.get("Horror")!.id,
    },
    {
      animeId: attackOnTitan.id,
      genreId: genreByName.get("Shounen")!.id,
    },

    {
      animeId: chainsawMan.id,
      genreId: genreByName.get("Action")!.id,
    },
    {
      animeId: chainsawMan.id,
      genreId: genreByName.get("Horror")!.id,
    },
    {
      animeId: chainsawMan.id,
      genreId: genreByName.get("Shounen")!.id,
    },
    {
      animeId: chainsawMan.id,
      genreId: genreByName.get("Drama")!.id,
    },
  ]);

  /*
   * Связи Anime ↔ Studio
   */

  await db.orm.public.AnimeStudio.createAll([
    {
      animeId: onePiece.id,
      studioId: studioByName.get("Toei Animation")!.id,
    },
    {
      animeId: attackOnTitan.id,
      studioId: studioByName.get("WIT Studio")!.id,
    },
    {
      animeId: attackOnTitan.id,
      studioId: studioByName.get("MAPPA")!.id,
    },
    {
      animeId: chainsawMan.id,
      studioId: studioByName.get("MAPPA")!.id,
    },
  ]);

  /*
   * Связи Anime ↔ Character
   */

  await db.orm.public.AnimeCharacter.createAll([
    {
      animeId: onePiece.id,
      characterId: characterByName.get("Monkey D. Luffy")!.id,
    },
    {
      animeId: onePiece.id,
      characterId: characterByName.get("Roronoa Zoro")!.id,
    },
    {
      animeId: onePiece.id,
      characterId: characterByName.get("Nami")!.id,
    },

    {
      animeId: attackOnTitan.id,
      characterId: characterByName.get("Eren Yeager")!.id,
    },
    {
      animeId: attackOnTitan.id,
      characterId: characterByName.get("Mikasa Ackerman")!.id,
    },
    {
      animeId: attackOnTitan.id,
      characterId: characterByName.get("Armin Arlert")!.id,
    },

    {
      animeId: chainsawMan.id,
      characterId: characterByName.get("Denji")!.id,
    },
    {
      animeId: chainsawMan.id,
      characterId: characterByName.get("Power")!.id,
    },
    {
      animeId: chainsawMan.id,
      characterId: characterByName.get("Makima")!.id,
    },
  ]);

  /*
   * Screenshots
   */

  await db.orm.public.Screenshot.createAll([
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/01.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/02.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/03.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/04.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/05.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/06.jpg",
    },
    {
      animeId: onePiece.id,
      imageUrl: "/anime/one-piece/screenshots/07.jpg",
    },

    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/01.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/02.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/03.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/04.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/05.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/06.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/07.jpg",
    },
    {
      animeId: attackOnTitan.id,
      imageUrl: "/anime/attack-on-titan/screenshots/08.jpg",
    },

    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/01.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/02.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/03.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/04.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/05.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/06.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/07.jpg",
    },
    {
      animeId: chainsawMan.id,
      imageUrl: "/anime/chainsaw-man/screenshots/08.jpg",
    },
  ]);

  console.log("Database seeded successfully");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
