import fs from "fs";
import ar from "ansi-regex";

import { Options } from "./options";

function log(...args: any[]) {
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

function append(line: string) {
  try {
    fs.appendFileSync(
      getOptions().appendToFile,
      `${line.replace(ar(), "")}\r\n`
    );
  } catch (exception) {
    console.log(exception);
  }
}

function setOptions(options: Options) {
  Object.assign(getOptions(), options);
}

function getOptions(): Options {
  return (global["fir"] =
    global["fir"] || ({ formatter: message => message } as Options));
}

export default {
  log,
  setOptions,
  getOptions
};
