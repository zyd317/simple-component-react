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
                    <img className="close" onClick={close} src='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTU2MS4xNyA1MDkuMDZsMjk2Ljg1Ny0yOTUuMzJjMTQuMDM3LTEzLjk2OCAxNC4xMDgtMzYuNi4xNC01MC42MzgtMTMuOTk4LTE0LjA2OC0zNi41OTItMTQuMTA4LTUwLjYyOS0uMTRMNTEwLjYwNSA0NTguMzE0IDIxNi4yNTYgMTYzLjA3Yy0xMy45MzMtMTMuOTY3LTM2LjU5Ny0xNC4wMzctNTAuNjM1LS4wNzItMTQuMDA0IDEzLjk2Ni0xNC4wMzcgMzYuNjMyLS4wNyA1MC42N2wyOTQuMjc3IDI5NS4xNzQtMjk2LjcxNCAyOTUuMTRjLTE0LjAzOSAxMy45NjgtMTQuMTEgMzYuNTk3LS4xNDMgNTAuNjM4YTM1LjcyMiAzNS43MjIgMCAwIDAgMjUuMzg1IDEwLjU2YzkuMTMgMCAxOC4yNjctMy40NyAyNS4yNS0xMC40MmwyOTYuNzg3LTI5NS4yMTJMODA3LjQzIDg1Ny40ODNjNi45ODMgNy4wMjIgMTYuMTUzIDEwLjUzIDI1LjM1MyAxMC41M2EzNS43MyAzNS43MyAwIDAgMCAyNS4yODItMTAuNDZjMTMuOTk5LTEzLjk2NiAxNC4wMzctMzYuNTkyLjA3Mi01MC42M0w1NjEuMTcgNTA5LjA2em0wIDAiLz48L3N2Zz4='/>
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