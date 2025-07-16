"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userServices_1 = require("../services/userServices");
const userServices = new userServices_1.UserServices();
class UserController {
    static getAll(req, res) {
        const users = userServices.getAllUsers();
        if (!users) {
            res.status(400).json({ error: 'no users found' });
        }
        res.status(200).json(users); //response da API
    }
}
exports.UserController = UserController;
