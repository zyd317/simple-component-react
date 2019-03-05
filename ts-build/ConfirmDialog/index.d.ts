/**
 * 确认窗口
 */
import { Component } from 'react';
import './index.scss';
interface props {
    handleClose: Function;
}
interface state {
    handleClose: Function;
    contentType: 'confirm' | 'alert';
    handleSure: Function;
    hide: boolean;
    title: string;
    content: string;
}
declare class ConfirmDialog extends Component<props, state> {
    private initClose;
    constructor(props: props);
    render(): JSX.Element | null;
    open(config: state): void;
    close(): void;
}
export default ConfirmDialog;
