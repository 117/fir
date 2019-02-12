import { Level } from "./level";
export declare class Fir {
    private formats;
    private loggers;
    constructor();
    /**
     * Define a new format for the specified level.
     * @param level desired log level
     * @param message hello world
     */
    format(level: Level, formatter: (level: Level, message: string) => string): Fir;
    /**
     * Define a log file to save to for the specified level.
     * @param level desired log level
     * @param async should logging be asynchronous
     */
    save(level: Level, file: string, async?: boolean): Fir;
    /**
     * Log a message through Fir.
     * @param level desired log level
     * @param message input to be logged
     */
    log(level: Level, message: string): Fir;
    /**
     * Log a message asynchronously through Fir.
     * @param level desired log level
     * @param message input to be logged
     */
    logAsync(level: Level, message: string): Promise<Fir>;
}
declare const _default: Fir;
export default _default;
