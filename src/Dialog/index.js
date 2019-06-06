/**
 * @author yidi.zhao
 * modal component only for show
 */
import React from 'react';
import './index.scss';
const fn = ()=>{};

export default function Dialog(props){
    const {title, showCloseIcon, buttons, customClassName, children, close } = props;
    const newTitle = title === undefined ? '删除确认' : title;
    const newShowCloseIcon = showCloseIcon === undefined ? true : showCloseIcon;
    const newClose = close || fn;
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
                        { newButtons.map((item, i) => getButton(item, i)) }
                    </div> : null
                }
            </div>
        </div>
    );
}

function getTitle (title, showCloseIcon, close) {
    if(!title){
        return null;
    }
    return (
        <div className="dialog-header">
            <div className="title">{title}</div>
            {
                showCloseIcon ?
                    <img className="close" onClick={close} src='../static/x.svg'/>
                    : null
            }
        </div>
    );
}

function getButton (item, key) {
    const { fn, text, ...itemProps } = item;
    return (
        <div key={key} onClick={fn} {...itemProps} className='button'>{text}</div>
    );
}