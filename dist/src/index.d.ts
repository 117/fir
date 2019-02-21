export declare class Fir {
    private formatter;
    private logfile;
    constructor();
    format(callback: (message: string) => string): Fir;
    save(file: string): Fir;
    log(...output: any[]): Fir;
}
declare const _default: Fir;
export default _default;
