import type { Models } from "@/prisma/contract";

export type Anime = Omit<Models.public_Anime, "createdAt">;