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
exports.createTask = exports.getTaskById = exports.getTasks = void 0;
const database_1 = require("../database");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM tasks");
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }
    catch (er) {
        console.log(er);
        return res.status(500).json("Internal server error");
    }
});
exports.getTasks = getTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
    return res.json(response.rows);
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        return res.send("received");
    }
    catch (er) {
        console.log(er);
        return res.status(500).json("internal server error");
    }
});
exports.createTask = createTask;
// export const updateTask = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};
// export const deleteTask = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {};
