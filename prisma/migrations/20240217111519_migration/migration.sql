-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "offerUrl" TEXT,
    "name" TEXT NOT NULL,
    "price" INTEGER,
    "isPicked" BOOLEAN NOT NULL DEFAULT false,
    "planId" TEXT,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
