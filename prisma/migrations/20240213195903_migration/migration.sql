-- AlterTable
ALTER TABLE "Hall" ADD COLUMN     "additionalDecorationPrice" INTEGER,
ADD COLUMN     "desertsDescription" TEXT,
ADD COLUMN     "fruitsPrice" INTEGER,
ADD COLUMN     "weddingCeremonyPrice" INTEGER,
ALTER COLUMN "alcoholInPrice" SET DEFAULT true,
ALTER COLUMN "drinksInPrice" SET DEFAULT true,
ALTER COLUMN "desertsInPrice" SET DEFAULT true,
ALTER COLUMN "isHotel" SET DEFAULT true,
ALTER COLUMN "decorationInPrice" SET DEFAULT true,
ALTER COLUMN "organizationSupport" SET DEFAULT true,
ALTER COLUMN "fruitsInPrice" SET DEFAULT true,
ALTER COLUMN "childrenInPrice" SET DEFAULT true,
ALTER COLUMN "extensionOfWedding" SET DEFAULT true,
ALTER COLUMN "weddingCeremony" SET DEFAULT true;
