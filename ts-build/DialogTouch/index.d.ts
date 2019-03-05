/**
 * @author yidi.zhao
 * modal component only for show
 */
import { ReactNode } from 'react';
import './index.scss';
interface props {
    title: string;
    customClassName?: string;
    children?: ReactNode;
    handleSure: () => {};
    handleClose: () => {};
    btnText: string;
}
export default function Dialog(props: props): JSX.Element;
export {};
