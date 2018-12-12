/**
 * @author yidi.zhao
 * modal component only for show
 */
import React from 'react';
import './index.scss';
const fn = ()=>{};

export default function DialogCoo(props){
    const {title, showCloseIcon, buttons, customClassName, children, close } = props;
    const state = {
        title: title === undefined ? '删除确认' : title,
        showCloseIcon: showCloseIcon === undefined ? true : showCloseIcon,
        close: close || fn,
        buttons: buttons === undefined ? [
            {
                type: 'negative',
                className: '',
                text: '确认',
                fn: close || fn,
            },
            {
                type: 'default',
                className: '',
                text: '取消',
                fn: close || fn,
            },
        ] : buttons,
        customClassName: customClassName || '',
        children: children === undefined ? '确认删除此评论？删除后不可恢复' : children,
    };
    return (
        <div className={`__simple_dialog_coo ${state.customClassName}`}>
            <div className="modal" onClick={state.close}/>
            <div className="dialog">
                {getTitle(state.title, state.showCloseIcon, state.close)}
                {
                    state.children ? <div className="dialog-body">{state.children}</div> : null
                }
                {
                    state.buttons && state.buttons.length ?
                    <div className="dialog-footer">
                        { state.buttons.map((item, i) => getButton(item, i)) }
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
            {showCloseIcon ?
                <div className="close"><i className="icon" onClick={close}/></div>
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