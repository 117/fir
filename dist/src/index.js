"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ansi_regex_1 = __importDefault(require("ansi-regex"));
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * Output a new line to the console and log.
 * @param args message arguments to log to console
 */
function log(...args) {
    args = args.map(element => {
        if (typeof element == "object") {
            element = JSON.stringify(element, null, 2);
        }
        return element;
    });
    const line = options().formatter(args.join(" "));
    process.stdout.write(`${line}\r\n`);
    if (options().logFile) {
        append(line);
    }
}
/**
 * Set the log formatter to be used.
 * @param callback your custom formatter, must return a string
 */
function format(callback) {
    options().formatter = callback;
}
/**
 * Specify a file to append new log lines to.
 * @param file path to log-file
 */
function save(file, rotate = true) {
    options().logFile = file;
    if (rotate) {
        if (fs_1.default.existsSync(options().logFile)) {
            fs_1.default.writeFileSync(path_1.default.join(path_1.default.parse(options().logFile).dir, dayjs_1.default()
                .format("MM-DD-YY HH:MM:ss A")
                .concat(".backup")), fs_1.default.readFileSync(options().logFile).toString());
        }
    }
}
function append(line) {
    try {
        fs_1.default.appendFileSync(options().logFile, `${line.replace(ansi_regex_1.default(), "")}\r\n`);
    }
    catch (exception) {
        console.log(exception);
    }
}
function options() {
    return (global["fir"] =
        global["fir"] || { formatter: message => message });
}
exports.default = {
    format,
    save,
    log
};
