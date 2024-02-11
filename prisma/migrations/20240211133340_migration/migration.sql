-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('DONE', 'TODO');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "status" "TodoStatus" NOT NULL DEFAULT 'TODO';
