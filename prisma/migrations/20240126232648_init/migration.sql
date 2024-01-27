-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shortId" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortId_key" ON "Url"("shortId");
