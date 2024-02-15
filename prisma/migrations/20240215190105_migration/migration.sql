-- CreateTable
CREATE TABLE "Inspiration" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "planId" TEXT,

    CONSTRAINT "Inspiration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inspiration" ADD CONSTRAINT "Inspiration_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
