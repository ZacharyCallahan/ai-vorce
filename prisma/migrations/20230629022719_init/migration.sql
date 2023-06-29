-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "bot" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);
