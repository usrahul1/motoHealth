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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const api_1 = __importDefault(require("../../services/api"));
const queries = {
    vehicleByBrandAndModel: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        return yield api_1.default.getVehicleByBrandAndModel(args.brand, args.model);
    }),
    vehicleByBrand: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { brand }) {
        return yield api_1.default.getVehiclesByBrand(brand);
    }),
    userVehicles: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId }) {
        return yield api_1.default.getUserVehicles(userId);
    }),
    userVehicleCount: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId }) {
        return yield api_1.default.getUserVehicleCount(userId);
    }),
    allVehicleBrands: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield api_1.default.getAllVehicleBrands();
    }),
    allVehicles: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield api_1.default.getAllVehicles();
    }),
    vehicleById: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
        return yield api_1.default.getVehicleById(id);
    }),
};
const mutations = {
    addUserVehicle: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId, vehicleId }) {
        return yield api_1.default.addUserVehicle(userId, vehicleId);
    }),
    removeUserVehicle: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId, vehicleId }) {
        return yield api_1.default.removeUserVehicle(userId, vehicleId);
    }),
};
exports.resolvers = { queries, mutations };
