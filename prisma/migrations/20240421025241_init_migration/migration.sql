-- CreateTable
CREATE TABLE "codelab" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "codelab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "collectedCodelabsNumber" INTEGER NOT NULL DEFAULT 0,
    "lastCollectedCodelabDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "codelab_qrCode_key" ON "codelab"("qrCode");

-- CreateIndex
CREATE UNIQUE INDEX "user_telegram_key" ON "user"("telegram");

-- AddForeignKey
ALTER TABLE "codelab" ADD CONSTRAINT "codelab_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
