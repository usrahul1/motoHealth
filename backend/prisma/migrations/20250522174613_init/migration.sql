-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "isElectric" BOOLEAN NOT NULL,
    "service" DOUBLE PRECISION NOT NULL,
    "parts" DOUBLE PRECISION NOT NULL,
    "insurance" DOUBLE PRECISION NOT NULL,
    "safety" DOUBLE PRECISION NOT NULL,
    "fuelTankCapacity" DOUBLE PRECISION,
    "batteryCapacity" DOUBLE PRECISION,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVehicles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "UserVehicles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserVehicles_userId_vehicleId_key" ON "UserVehicles"("userId", "vehicleId");

-- AddForeignKey
ALTER TABLE "UserVehicles" ADD CONSTRAINT "UserVehicles_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
