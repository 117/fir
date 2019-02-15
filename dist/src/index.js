"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ansi_regex_1 = __importDefault(require("ansi-regex"));
const moment_1 = __importDefault(require("moment"));
class Fir {
    constructor() {
        this.formatter = message => `${moment_1.default().format("hh:mm:ss")} Fir: ${message}`;
    }
    format(callback) {
        this.formatter = callback;
        return this;
    }
    save(file, async = false) {
        this.saving = { file, async };
        return this;
    }
    log(...output) {
        const message = this.formatter(output.join(" "));
        process.stdout.write(`${message}\r\n`);
        if (this.saving) {
            fs_1.default.appendFileSync(this.saving.file, `${message.replace(ansi_regex_1.default(), "")}\r\n`);
        }
        return this;
    }
}
exports.Fir = Fir;
exports.default = new Fir();
const fir = new Fir();
fir.log("The default format is quite good");
