-- CreateTable
CREATE TABLE "tokendb" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tokendb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokendb_id_key" ON "tokendb"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tokendb_token_key" ON "tokendb"("token");
