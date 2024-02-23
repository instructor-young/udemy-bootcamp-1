-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_reservedById_fkey";

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "reservedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_reservedById_fkey" FOREIGN KEY ("reservedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
