import { Prisma } from "@prisma/client";
import { prisma } from "~/utils/db.server";

export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    images: true,
    category: true
  }
}>;

export async function getStaffPicks() {
  return await prisma.product.findMany({
    where: {
      staffPick: true
    },
    include: {
      images: true,
      category: true
    }
  });
}