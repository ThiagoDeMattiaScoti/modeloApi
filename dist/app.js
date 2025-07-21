"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const sales_routes_1 = __importDefault(require("./routes/sales.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)(); //usa express para iniciar o servidor
app.use(express_1.default.json()); //utiliza json como comunicação
app.use((0, cors_1.default)());
app.use('/api', user_routes_1.default); // Faz a API entender as rotas de usuário omo rota (Permite ser usada)
app.use('/api', product_routes_1.default);
app.use('/api', login_routes_1.default);
app.use('/api', sales_routes_1.default);
exports.default = app;
