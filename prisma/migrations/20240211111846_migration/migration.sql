/*
  Warnings:

  - You are about to drop the column `giftTracking` on the `Plan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[planConfigId]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "giftTracking",
ADD COLUMN     "planConfigId" TEXT;

-- CreateTable
CREATE TABLE "PlanConfig" (
    "id" TEXT NOT NULL,
    "giftsEnabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PlanConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_planConfigId_key" ON "Plan"("planConfigId");

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_planConfigId_fkey" FOREIGN KEY ("planConfigId") REFERENCES "PlanConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
