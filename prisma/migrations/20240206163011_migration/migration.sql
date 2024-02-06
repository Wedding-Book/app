-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "SharedPlans" DROP CONSTRAINT "SharedPlans_planId_fkey";

-- DropForeignKey
ALTER TABLE "SharedPlans" DROP CONSTRAINT "SharedPlans_userId_fkey";

-- AddForeignKey
ALTER TABLE "SharedPlans" ADD CONSTRAINT "SharedPlans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedPlans" ADD CONSTRAINT "SharedPlans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
