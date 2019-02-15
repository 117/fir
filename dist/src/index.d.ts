export declare class Fir {
    private formatter;
    private saving;
    constructor();
    format(callback: (message: string) => string): Fir;
    save(file: string, async?: boolean): Fir;
    log(...output: any[]): Fir;
}
declare const _default: Fir;
export default _default;
