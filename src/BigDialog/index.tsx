/**
 * @author yidi.zhao
 * modal component only for show
 */
import React from 'react';
import './style.scss';
const fn = () => {};

export default function Dialog (props: SimpleComponentReact.DialogProps) {
    const {title, showCloseIcon, customClassName, children, close } = props;
    const newShowCloseIcon = showCloseIcon === undefined ? true : showCloseIcon;
    const newClose = close || fn;
    const newCustomClassName = customClassName || '';
    return (
        <div className={`__simple_dialog_coo_big ${newCustomClassName}`}>
            <div className="modal" onClick={newClose}/>
            <div className="dialog">
                {getTitle(title, newShowCloseIcon, newClose)}
                {
                    children ? <div className="dialog-body">{children}</div> : null
                }
            </div>
        </div>
    );
}

function getTitle (title: string, showCloseIcon: boolean, close: () => void) {
    if (!title) {
        return null;
    }
    return (
        <div className="dialog-header">
            <div className="title">{title}</div>
            {
                showCloseIcon ?
                    <img className="close" onClick={close} src="//sf3-ttcdn-tos.pstatp.com/obj/ttfe/MP_SOURCE/x.svg"/>
                    : null
            }
        </div>
    );
}
