"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const fs_1 = __importDefault(require("fs"));
const src_1 = __importDefault(require("../src"));
src_1.default.setOptions({
    wipeOnRun: true,
    appendToFile: 'latest.log',
    formatter: (message) => `[Test] ${message}`,
});
ava_1.default('log', async function (test) {
    src_1.default.log('test');
    fs_1.default.unlinkSync(src_1.default.getOptions().appendToFile);
    test.pass();
});
