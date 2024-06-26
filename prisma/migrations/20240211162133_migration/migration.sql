-- CreateTable
CREATE TABLE "Hall" (
    "id" TEXT NOT NULL,
    "planId" TEXT,
    "isPicked" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "imgUrl" TEXT,
    "googleUrl" TEXT,
    "personCost" INTEGER,
    "additionalCost" INTEGER,
    "partyTime" TEXT,
    "alcoholInPrice" BOOLEAN NOT NULL DEFAULT false,
    "alcoholPrice" INTEGER,
    "drinksInPrice" BOOLEAN NOT NULL DEFAULT false,
    "drinksPrice" INTEGER,
    "desertsInPrice" BOOLEAN NOT NULL DEFAULT false,
    "desertsPrice" INTEGER,
    "menu" TEXT,
    "isHotel" BOOLEAN NOT NULL DEFAULT false,
    "numberOfHotelGuests" INTEGER,
    "hotelPricePerPerson" INTEGER,
    "tableSettings" TEXT,
    "decorationInPrice" BOOLEAN NOT NULL DEFAULT false,
    "decorationPrice" INTEGER,
    "decorationDescription" TEXT,
    "soundSystem" TEXT,
    "additionalAttractions" TEXT,
    "damagePrice" TEXT,
    "organizationSupport" BOOLEAN NOT NULL DEFAULT false,
    "organizationSupportDescription" TEXT,
    "availableDates" TEXT,
    "maxGuests" INTEGER,
    "fruitsInPrice" BOOLEAN NOT NULL DEFAULT false,
    "childrenInPrice" BOOLEAN NOT NULL DEFAULT false,
    "childrenPrice" INTEGER,
    "extensionOfWedding" BOOLEAN NOT NULL DEFAULT false,
    "extensionOfWeddingPrice" INTEGER,
    "advance" INTEGER,
    "weddingCeremony" BOOLEAN NOT NULL DEFAULT false,
    "weddingCeremonyDescription" TEXT,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hall" ADD CONSTRAINT "Hall_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
