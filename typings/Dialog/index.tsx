/**
 * @author yidi.zhao
 * modal component only for show
 */
import React, {ReactElement} from 'react';
import './index.scss';
const fns = ()=>{};
interface props {
    title: string;
    showCloseIcon?: boolean;
    buttons: buttonItem[];
    customClassName?: string;
    children?: ReactElement<any> | string;
    close: any;
}
interface buttonItem {
    fn: any;
    text: string;
}
export default function Dialog(props: props){
    const {title, showCloseIcon, buttons, customClassName, children, close } = props;
    const newTitle = title === undefined ? '删除确认' : title;
    const newShowCloseIcon = showCloseIcon === undefined ? true : showCloseIcon;
    const newClose = close || fns;
    const newButtons = buttons === undefined ? [
            {
                type: 'negative',
                className: '',
                text: '确认',
                fn: newClose,
            },
            {
                type: 'default',
                className: '',
                text: '取消',
                fn: newClose,
            },
        ] : buttons;
    const newCustomClassName = customClassName || '';
    const newChildren = children === undefined ? '确认删除此评论？删除后不可恢复' : children;
    return (
        <div className={`__simple_dialog_coo ${newCustomClassName}`}>
            <div className="modal" onClick={newClose}/>
            <div className="dialog">
                {getTitle(newTitle, newShowCloseIcon, newClose)}
                {
                    newChildren ? <div className="dialog-body">{newChildren}</div> : null
                }
                {
                    (newButtons && newButtons.length) ?
                    <div className="dialog-footer">
                        {renderBtn(newButtons)}
                    </div> : null
                }
            </div>
        </div>
    );
}

function renderBtn(newButtons: buttonItem[]):JSX.Element[] {
    return newButtons.map((item, i) => getButton(item, i));
}

function getTitle (title:string, showCloseIcon:boolean, close:()=>{}) {
    if(!title){
        return null;
    }
    return (
        <div className="dialog-header">
            <div className="title">{title}</div>
            {
                showCloseIcon ?
                    <img className="close" onClick={close} src='../src/Dialog/x.svg'/>
                    : null
            }
        </div>
    );
}

function getButton (item:buttonItem, key:number) {
    const { fn=fns, text='', ...itemProps } = item || {};
    return (
        <div key={key} onClick={fn} {...itemProps} className='button'>{text}</div>
    );
}