/*
  Warnings:

  - You are about to drop the column `bot` on the `Messages` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `botMessage` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userMessage` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "bot",
DROP COLUMN "user",
ADD COLUMN     "botMessage" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userMessage" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
