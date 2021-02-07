"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Flag = exports.Level = void 0;
var Level;
(function (Level) {
    Level[Level["INFO"] = 0] = "INFO";
    Level[Level["WARN"] = 1] = "WARN";
    Level[Level["DEBUG"] = 2] = "DEBUG";
    Level[Level["ERROR"] = 3] = "ERROR";
    Level[Level["PANIC"] = 4] = "PANIC";
})(Level = exports.Level || (exports.Level = {}));
var Flag;
(function (Flag) {
    Flag["DATE"] = "date";
})(Flag = exports.Flag || (exports.Flag = {}));
class Logger {
    constructor(...flags) {
        this.flags = [];
        this.flags = flags;
    }
    log(level = Level.INFO, data) {
        let output = { level: level };
        this.flags.forEach((flag) => {
            switch (flag) {
                case Flag.DATE:
                    output = { ...{ date: Date.now(), ...output } };
            }
        });
        process.stdout.write(JSON.stringify({ ...output, ...data }).concat('\n'));
        level >= Level.PANIC && process.exit();
    }
}
exports.Logger = Logger;
