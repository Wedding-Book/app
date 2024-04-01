-- AlterTable
ALTER TABLE "InvitationGuest" ADD COLUMN     "isAdditional" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PlanConfig" ADD COLUMN     "additionalGuestsEnabled" BOOLEAN NOT NULL DEFAULT false;
