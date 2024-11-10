-- CreateTable
CREATE TABLE "donators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "photo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "donators_name_key" ON "donators"("name");
