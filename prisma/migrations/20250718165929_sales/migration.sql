-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productsInfo" JSONB,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);
