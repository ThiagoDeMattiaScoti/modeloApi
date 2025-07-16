"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const mockUsers = [
    { id: 1, name: 'Thiago' },
    { id: 2, name: 'Gustavo' }
];
class UserRepository {
    getAll() {
        return mockUsers;
    }
}
exports.UserRepository = UserRepository;
