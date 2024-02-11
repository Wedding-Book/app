/*
  Warnings:

  - You are about to drop the `InvitationGuests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_invitationId_fkey";

-- DropForeignKey
ALTER TABLE "InvitationGuests" DROP CONSTRAINT "InvitationGuests_planId_fkey";

-- DropTable
DROP TABLE "InvitationGuests";

-- CreateTable
CREATE TABLE "InvitationGuest" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "moneyGift" INTEGER,
    "otherGift" TEXT,

    CONSTRAINT "InvitationGuest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvitationGuest" ADD CONSTRAINT "InvitationGuest_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "InvitationGuest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
