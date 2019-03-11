"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ansi_regex_1 = __importDefault(require("ansi-regex"));
function log(...args) {
    args = args.map(element => {
        if (typeof element == "object") {
            element = JSON.stringify(element, null, 2);
        }
        return element;
    });
    const line = getOptions().formatter(args.join(" "));
    process.stdout.write(`${line}\r\n`);
    if (getOptions().appendToFile) {
        append(line);
    }
}
function append(line) {
    try {
        fs_1.default.appendFileSync(getOptions().appendToFile, `${line.replace(ansi_regex_1.default(), "")}\r\n`);
    }
    catch (exception) {
        console.log(exception);
    }
}
function setOptions(options) {
    Object.assign(getOptions(), options);
}
function getOptions() {
    return (global["fir"] =
        global["fir"] || { formatter: message => message });
}
exports.default = {
    log,
    setOptions,
    getOptions
};
