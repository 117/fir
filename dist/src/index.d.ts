/**
 * @name fir
 * @author 117
 * @repo https://github.com/117/fir
 * @description a small yet powerful logger
 */
export declare class Fir {
    private formatter;
    private logfile;
    constructor();
    format(callback: (message: string) => string): Fir;
    save(file: string): Fir;
    log(...output: any[]): Fir;
}
declare const _default: any;
export default _default;
