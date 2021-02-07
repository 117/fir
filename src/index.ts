export enum Level {
  INFO,
  WARN,
  DEBUG,
  ERROR,
  PANIC,
}

export enum Flag {
  DATE = 'date',
}

export class Logger {
  flags: Flag[] = []

  constructor(...flags: Flag[]) {
    this.flags = flags
  }

  log(level: Level = Level.INFO, data: { [key: string]: any }) {
    let output = { level: level }

    this.flags.forEach((flag) => {
      switch (flag) {
        case Flag.DATE:
          output = { ...{ date: Date.now(), ...output } }
      }
    })

    process.stdout.write(JSON.stringify({ ...output, ...data }).concat('\n'))
    level >= Level.PANIC && process.exit()
  }
}
