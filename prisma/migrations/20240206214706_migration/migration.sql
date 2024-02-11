-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "giftTracking" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "InvitationGuests" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "moneyGift" INTEGER,
    "otherGift" TEXT,

    CONSTRAINT "InvitationGuests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "invitationId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvitationGuests" ADD CONSTRAINT "InvitationGuests_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "InvitationGuests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
