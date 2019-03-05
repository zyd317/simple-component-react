/**
 * @author yidi.zhao
 * modal component only for show
 */
import React, {ReactNode} from 'react';
import './index.scss';
const fns = ()=>{};
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
export default function Dialog(props: props){
    // 默认参数，只有undefined会走默认参数
    const {
        title = '删除确认',
        showCloseIcon = true,
        buttons,
        customClassName = '',
        children = '确认删除此评论？删除后不可恢复',
        close = fns
    } = props;
    const newButtons = buttons || [
            {
                type: 'negative',
                className: '',
                text: '确认',
                fn: close,
            },
            {
                type: 'default',
                className: '',
                text: '取消',
                fn: close,
            },
        ];
    return (
        <div className={`__simple_dialog_coo ${customClassName}`}>
            <div className="modal" onClick={close}/>
            <div className="dialog">
                {getTitle(title, showCloseIcon, close)}
                {
                    children ? <div className="dialog-body">{children}</div> : null
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

function renderBtn(newButtons: buttonItem[]): ReactNode[] {
    return newButtons.map((item, i) => getButton(item, i));
}

function getTitle (title: string, showCloseIcon: boolean, close: ()=>{}): ReactNode {
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

function getButton (item:buttonItem, key:number): ReactNode {
    const { fn = fns, text = '', ...itemProps } = item || {};
    return (
        <div key={key} onClick={fn} {...itemProps} className='button'>{text}</div>
    );
}