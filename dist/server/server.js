"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const environment_1 = require("../common/environment");
class Server {
    constructor() {
        this.app = express();
        this.port = environment_1.environment.server.port;
        this.config();
    }
    initServer() {
        return this.app.listen(this.port, () => {
            console.log('Server is listening on PORT:', this.port);
        });
    }
    config() {
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.Server = Server;
