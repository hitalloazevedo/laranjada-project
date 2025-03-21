"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const createUser_1 = require("../application/useCases/createUser");
// Initialize router instance
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
// Route: Create User
// Method: POST
// Path: /user
// Description: Creates a new user in the system
userRouter.post("/user", (req, res) => {
    createUser_1.createUserController.handle(req, res);
});
