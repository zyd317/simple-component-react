import { ReactNode } from 'react';
import './index.scss';
interface props {
    tips?: string;
    className?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children?: ReactNode;
    icon?: ReactNode;
    [key: string]: any;
}
export default function HoverContainer(props: props): JSX.Element;
export {};
