interface config {
    close?: Function;
    [key: string]: any;
}
declare const _default: {
    open: (comp: Readonly<import("prop-types").Requireable<string>>, config: config) => void;
    update: (comp: Readonly<import("prop-types").Requireable<string>>, config: config) => void;
    close: (comp: Readonly<import("prop-types").Requireable<string>>) => void;
    _action: (comp: Readonly<import("prop-types").Requireable<string>>, config: config, action: "close" | "open" | "update") => void;
};
export default _default;
