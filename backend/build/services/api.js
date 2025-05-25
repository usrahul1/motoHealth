"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../lib/db");
class APIService {
    static getVehicleByBrandAndModel(brand, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = yield db_1.prismaClient.vehicle.findFirst({
                where: {
                    brand: brand,
                    model: model,
                },
            });
            return vehicle;
        });
    }
    static getVehiclesByBrand(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicles = yield db_1.prismaClient.vehicle.findMany({
                where: {
                    brand: brand,
                },
            });
            return vehicles;
        });
    }
    static getUserVehicles(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userVehicles = yield db_1.prismaClient.userVehicles.findMany({
                where: { userId },
                include: { vehicle: true },
            });
            return userVehicles;
        });
    }
    static addUserVehicle(userId, vehicleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.prismaClient.userVehicles.create({
                    data: {
                        userId,
                        vehicleId,
                    },
                });
                return true;
            }
            catch (error) {
                console.error("Failed to add user vehicle:", error);
                return false;
            }
        });
    }
    static getUserVehicleCount(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield db_1.prismaClient.userVehicles.count({
                where: { userId },
            });
            console.log(count);
            return count;
        });
    }
    static getAllVehicleBrands() {
        return __awaiter(this, void 0, void 0, function* () {
            const brands = yield db_1.prismaClient.vehicle.findMany({
                distinct: ["brand"],
                select: { brand: true },
            });
            return brands.map((b) => b.brand);
        });
    }
    static getAllVehicles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.prismaClient.vehicle.findMany();
        });
    }
    static getVehicleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = yield db_1.prismaClient.vehicle.findUnique({
                where: {
                    id: id,
                },
            });
            return vehicle;
        });
    }
    static removeUserVehicle(userId, vehicleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.prismaClient.userVehicles.deleteMany({
                    where: {
                        userId,
                        vehicleId,
                    },
                });
                return true;
            }
            catch (error) {
                console.error("Failed to remove user vehicle:", error);
                return false;
            }
        });
    }
}
exports.default = APIService;
