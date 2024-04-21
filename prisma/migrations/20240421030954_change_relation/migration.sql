/*
  Warnings:

  - You are about to drop the column `userId` on the `codelab` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "codelab" DROP CONSTRAINT "codelab_userId_fkey";

-- AlterTable
ALTER TABLE "codelab" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_codelabTouser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_codelabTouser_AB_unique" ON "_codelabTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_codelabTouser_B_index" ON "_codelabTouser"("B");

-- AddForeignKey
ALTER TABLE "_codelabTouser" ADD CONSTRAINT "_codelabTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "codelab"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_codelabTouser" ADD CONSTRAINT "_codelabTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
