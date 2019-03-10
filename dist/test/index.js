"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const src_1 = __importDefault(require("../src"));
ava_1.default("create format", async function (test) {
    src_1.default.format(message => message);
    test.pass();
});
ava_1.default("create logger", async function (test) {
    src_1.default.save("./example.log");
    test.pass();
});
ava_1.default("log", async function (test) {
    src_1.default.log("test");
    test.pass();
});
