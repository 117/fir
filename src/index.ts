import fs from "fs";

import { Level } from "./level";
import { Logger } from "./logger";

export class Fir {
  private formats: Map<Level, CallableFunction> = new Map();
  private loggers: Map<Level, Logger> = new Map();
  constructor() {
    this.format(Level.ALL, (level, message) => `${level}: ${message}`);
  }
  /**
   * Define a new format for the specified level.
   * @param level desired log level
   * @param message hello world
   */
  format(
    level: Level,
    formatter: (level: Level, message: string) => string
  ): Fir {
    this.formats.set(level, formatter);
    if (level == Level.ALL) {
      Object.keys(Level).forEach(lvl =>
        this.formats.set(Level[lvl], formatter)
      );
    }
    return this;
  }
  /**
   * Define a log file to save to for the specified level.
   * @param level desired log level
   * @param async should logging be asynchronous
   */
  save(level: Level, file: string, async?: boolean): Fir {
    this.loggers.set(level, { file: file, async: async });
    return this;
  }
  /**
   * Log a message through Fir.
   * @param level desired log level
   * @param message input to be logged
   */
  log(level: Level, message: string): Fir {
    let formatted = message;
    if (this.formats.has(level)) {
      // Apply the saved format.
      formatted = this.formats.get(level)(level, message);
    }
    // Handle any log file saving.
    this.loggers.forEach(function(logger, lvl) {
      if (level == lvl || lvl == Level.ALL) {
        if (logger.async) {
          fs.appendFile(logger.file, `${formatted}\r\n`, () => null);
        } else {
          fs.appendFileSync(logger.file, `${formatted}\r\n`);
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
  async logAsync(level: Level, message: string): Promise<Fir> {
    return await this.log(level, message);
  }
}

export default new Fir();
