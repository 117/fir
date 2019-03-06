import fs from "fs";
import ar from "ansi-regex";

export class Fir {
  private formatter: CallableFunction;
  private logfile: string;
  constructor() {
    this.formatter = message => message;
  }
  format(callback: (message: string) => string): Fir {
    this.formatter = callback;
    return this;
  }
  save(file: string): Fir {
    this.logfile = file;
    return this;
  }
  log(...output: any[]): Fir {
    output = output.map(element => {
      if (typeof element == "object") {
        element = JSON.stringify(element, null, 2);
      }
      return element;
    });
    const message = this.formatter(output.join(" "));
    process.stdout.write(`${message}\r\n`);
    if (this.logfile) {
      try {
        fs.appendFileSync(this.logfile, `${message.replace(ar(), "")}\r\n`);
      } catch (exception) {
        console.log(exception);
      }
    }
    return this;
  }
}

if (!global["__fir"]) {
  global["__fir"] = new Fir();
}

export default global["__fir"] as Fir;
