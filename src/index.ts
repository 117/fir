import fs from "fs";
import path from "path";
import ar from "ansi-regex";
import dayjs from "dayjs";

import { Options } from "./options";

/**
 * Output a new line to the console and log.
 * @param args message arguments to log to console
 */

function log(...args: any[]) {
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

function format(callback: (line: string) => string) {
  options().formatter = callback;
}

/**
 * Specify a file to append new log lines to.
 * @param file path to log-file
 */

function save(file: string, rotate: boolean = true) {
  options().logFile = file;
  if (rotate) {
    if (fs.existsSync(options().logFile)) {
      fs.writeFileSync(
        path.join(
          dayjs()
            .format("MM-DD-YY HH:MM:ss A")
            .concat(".backup")
        ),
        fs.readFileSync(options().logFile).toString()
      );
    }
  }
}

function append(line: string) {
  try {
    fs.appendFileSync(options().logFile, `${line.replace(ar(), "")}\r\n`);
  } catch (exception) {
    console.log(exception);
  }
}

function options(): Options {
  return (global["fir"] =
    global["fir"] || ({ formatter: message => message } as Options));
}

export default {
  format,
  save,
  log
};
