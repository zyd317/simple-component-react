/**
 * @author yidi.zhao
 * modal component only for show
 */
import { ReactNode } from 'react';
import './index.scss';
interface props {
    title: string;
    showCloseIcon?: boolean;
    buttons: buttonItem[];
    customClassName?: string;
    children?: ReactNode;
    close: any;
}
interface buttonItem {
    fn: any;
    text: string;
}
export default function Dialog(props: props): JSX.Element;
export {};
