/**
 * 确认窗口-移动端
 */
import { Component } from 'react';
import './index.scss';
interface props {
    handleClose: any;
}
interface state {
    hide: boolean;
    title: string;
    content: string;
    btnText: string;
    handleSure: any;
}
declare class ConfirmDialog extends Component<props, state> {
    private initClose;
    constructor(props: props);
    render(): JSX.Element | null;
    open(config: state): void;
    close(): void;
}
export default ConfirmDialog;
