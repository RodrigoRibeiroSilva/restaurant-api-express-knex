"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/app/server/server");
exports.server = new server_1.Server();
exports.server.initServer();
