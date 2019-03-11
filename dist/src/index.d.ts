import { Options } from "./options";
declare function log(...args: any[]): void;
declare function setOptions(options: Options): void;
declare function getOptions(): Options;
declare const _default: {
    log: typeof log;
    setOptions: typeof setOptions;
    getOptions: typeof getOptions;
};
export default _default;
