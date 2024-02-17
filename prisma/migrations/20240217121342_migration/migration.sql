-- CreateTable
CREATE TABLE "ParentGift" (
    "id" TEXT NOT NULL,
    "imgUrl" TEXT,
    "offerUrl" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "planId" TEXT NOT NULL,

    CONSTRAINT "ParentGift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestGift" (
    "id" TEXT NOT NULL,
    "imgUrl" TEXT,
    "offerUrl" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "planId" TEXT NOT NULL,

    CONSTRAINT "GuestGift_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParentGift_planId_key" ON "ParentGift"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "GuestGift_planId_key" ON "GuestGift"("planId");

-- AddForeignKey
ALTER TABLE "ParentGift" ADD CONSTRAINT "ParentGift_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestGift" ADD CONSTRAINT "GuestGift_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
