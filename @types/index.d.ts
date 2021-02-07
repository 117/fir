export declare enum Level {
    INFO = 0,
    WARN = 1,
    DEBUG = 2,
    ERROR = 3,
    PANIC = 4
}
export declare enum Flag {
    DATE = "date"
}
export declare class Logger {
    flags: Flag[];
    constructor(...flags: Flag[]);
    log(level: Level | undefined, data: {
        [key: string]: any;
    }): void;
}
