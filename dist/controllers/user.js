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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        res.status(200).json({ users });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            res.status(404).json(`user with ${id} not found`);
        }
        else {
            res.status(200).json({ user });
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existingEmail = yield user_1.default.findOne({
            where: { email_user: body.email_user }
        });
        if (existingEmail) {
            res.status(400).json(`Email already exists: ${body.email_user}`);
        }
        const user = user_1.default.build(body);
        yield user.save();
        res.status(201).json({ user });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { id } = req.params;
    const { body } = req;
    try {
        const user = user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: `user with ${id} not found` });
        }
        const updateUser = yield user;
        (_a = (updateUser)) === null || _a === void 0 ? void 0 : _a.update(body);
        (_b = (updateUser)) === null || _b === void 0 ? void 0 : _b.save();
        res.status(200).json({ user: updateUser });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { id } = req.params;
    try {
        const user = user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: `user with ${id} not found` });
        }
        const deleteUser = yield user;
        (_c = (deleteUser)) === null || _c === void 0 ? void 0 : _c.destroy();
        res.status(200).json({ message: 'Deleted successfully' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map