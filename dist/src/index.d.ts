/**
 * Output a new line to the console and log.
 * @param args message arguments to log to console
 */
declare function log(...args: any[]): void;
/**
 * Set the log formatter to be used.
 * @param callback your custom formatter, must return a string
 */
declare function format(callback: (line: string) => string): void;
/**
 * Specify a file to append new log lines to.
 * @param file path to log-file
 */
declare function save(file: string, rotate?: boolean): void;
declare const _default: {
    format: typeof format;
    save: typeof save;
    log: typeof log;
};
export default _default;
