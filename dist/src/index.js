"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Level {
}
Level.ALL = "All";
Level.INFO = "INFO";
Level.DEBUG = "DEBUG";
Level.WARN = "WARN";
Level.ERROR = "ERROR";
exports.Level = Level;
class Fir {
    constructor() {
        this.formats = new Map();
        this.loggers = new Map();
        this.format(Level.ALL, (level, message) => `${level}: ${message}`);
    }
    /**
     * Define a new format for the specified level.
     * @param level desired log level
     * @param message hello world
     */
    format(level, formatter) {
        this.formats.set(level, formatter);
        if (level == Level.ALL) {
            Object.keys(Level).forEach(lvl => this.formats.set(Level[lvl], formatter));
        }
        return this;
    }
    /**
     * Define a log file to save to for the specified level.
     * @param level desired log level
     * @param async should logging be asynchronous
     */
    save(level, file, async) {
        this.loggers.set(level, { file: file, async: async });
        return this;
    }
    /**
     * Log a message through Fir.
     * @param level desired log level
     * @param message input to be logged
     */
    log(level, message) {
        let formatted = message;
        if (this.formats.has(level)) {
            // Apply the saved format.
            formatted = this.formats.get(level)(level, message);
        }
        // Handle any log file saving.
        this.loggers.forEach(function (logger, lvl) {
            if (level == lvl || lvl == Level.ALL) {
                if (logger.async) {
                    fs_1.default.appendFile(logger.file, `${formatted}\r\n`, () => null);
                }
                else {
                    fs_1.default.appendFileSync(logger.file, `${formatted}\r\n`);
                }
            }
        });
        // Finally output the line to console.
        process.stdout.write(`${formatted}\r\n`);
        return this;
    }
    /**
     * Log a message asynchronously through Fir.
     * @param level desired log level
     * @param message input to be logged
     */
    async logAsync(level, message) {
        return await this.log(level, message);
    }
}
exports.Fir = Fir;
exports.default = new Fir();
