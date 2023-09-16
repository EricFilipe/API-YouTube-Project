"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = void 0;
const express_1 = require("express");
const UserRepository_1 = require("../modules/user/repositories/UserRepository");
const useRoutes = (0, express_1.Router)();
exports.useRoutes = useRoutes;
const userRepository = new UserRepository_1.UserRepository();
useRoutes.post('/sign-up', (request, response) => {
    userRepository.create(request, response);
});
useRoutes.post('/sign-in', (request, response) => {
    userRepository.login(request, response);
});
