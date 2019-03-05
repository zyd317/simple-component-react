/**
 * @author yidi.zhao
 */
import { Component } from 'react';
import './index.scss';
interface props {
    delayTime: number;
    noHide: Function;
    handleClose: Function;
}
interface state {
    content: string;
    status: 'success' | 'warning' | 'error';
    delayTime: number | 2500;
    noHide: Function;
    hide: boolean;
}
declare class PopAlert extends Component<props, state> {
    private scrollTimer?;
    private readonly initClose;
    constructor(props: Readonly<props>);
    /**
     * 只有props变了的时候才去执行
     * 先清除上一次的scrollTimer
     * 展示组件的时候!hide，如果没有noHide参数，且content有内容，表示需要自动消失
     * 隐藏组件的时候hide，清除scrollTimer。否则调用this.close的时候还是会触发这个
     */
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: props, nextState: state): boolean;
    render(): JSX.Element | null;
    open(config: object): void;
    close(): void;
}
export default PopAlert;
