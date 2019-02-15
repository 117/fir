import fs from "fs";
import ar from "ansi-regex";
import moment from "moment";

export class Fir {
  private formatter: CallableFunction;
  private saving: {
    file: string;
    async: boolean;
  };
  constructor() {
    this.formatter = message =>
      `${moment().format("hh:mm:ss")} Fir: ${message}`;
  }
  format(callback: (message: string) => string): Fir {
    this.formatter = callback;
    return this;
  }
  save(file: string, async: boolean = false): Fir {
    this.saving = { file, async };
    return this;
  }
  log(...output: any[]): Fir {
    const message = this.formatter(output.join(" "));
    process.stdout.write(`${message}\r\n`);
    if (this.saving) {
      fs.appendFileSync(this.saving.file, `${message.replace(ar(), "")}\r\n`);
    }
    return this;
  }
}

export default new Fir();
