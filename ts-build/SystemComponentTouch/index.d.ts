interface config {
    close?: Function;
    [key: string]: any;
}
declare const _default: {
    open: (comp: string, config: config) => void;
    update: (comp: string, config: config) => void;
    close: (comp: string) => void;
    _action: (comp: string, config: config, action: "close" | "open" | "update") => void;
};
export default _default;
