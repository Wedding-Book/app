-- CreateTable
CREATE TABLE "Other" (
    "id" TEXT NOT NULL,
    "flowersUrl" TEXT,
    "flowersPrice" INTEGER,
    "flowersDescription" TEXT,
    "photographerUrl" TEXT,
    "photographerPrice" INTEGER,
    "photographerDescription" TEXT,
    "cameramanUrl" TEXT,
    "cameramanPrice" INTEGER,
    "cameramanDescription" TEXT,
    "musicUrl" TEXT,
    "musicPrice" INTEGER,
    "musicDescription" TEXT,
    "confectioneryUrl" TEXT,
    "confectioneryPrice" INTEGER,
    "confectioneryDescription" TEXT,
    "alcoholUrl" TEXT,
    "alcoholPrice" INTEGER,
    "alcoholDescription" TEXT,
    "drinksUrl" TEXT,
    "drinksPrice" INTEGER,
    "drinksDescription" TEXT,
    "ceremonyUrl" TEXT,
    "ceremonyPrice" INTEGER,
    "ceremonyDescription" TEXT,
    "brightsDressUrl" TEXT,
    "brightsDressPrice" INTEGER,
    "brightsDressDescription" TEXT,
    "groomsSuitUrl" TEXT,
    "groomsSuitPrice" INTEGER,
    "groomsSuitDescription" TEXT,
    "hairUrl" TEXT,
    "hairPrice" INTEGER,
    "hairDescription" TEXT,
    "beauticianUrl" TEXT,
    "beauticianPrice" INTEGER,
    "beauticianDescription" TEXT,
    "carUrl" TEXT,
    "carPrice" INTEGER,
    "carDescription" TEXT,
    "planId" TEXT NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Other_planId_key" ON "Other"("planId");

-- AddForeignKey
ALTER TABLE "Other" ADD CONSTRAINT "Other_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
