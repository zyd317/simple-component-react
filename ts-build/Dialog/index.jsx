var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * @author yidi.zhao
 * modal component only for show
 */
import React from 'react';
import './index.scss';
const fns = () => { };
export default function Dialog(props) {
    // 默认参数，只有undefined会走默认参数
    const { title = '删除确认', showCloseIcon = true, buttons, customClassName = '', children = '确认删除此评论？删除后不可恢复', close = fns } = props;
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
    return (<div className={`__simple_dialog_coo ${customClassName}`}>
            <div className="modal" onClick={close}/>
            <div className="dialog">
                {getTitle(title, showCloseIcon, close)}
                {children ? <div className="dialog-body">{children}</div> : null}
                {(newButtons && newButtons.length) ?
        <div className="dialog-footer">
                        {renderBtn(newButtons)}
                    </div> : null}
            </div>
        </div>);
}
function renderBtn(newButtons) {
    return newButtons.map((item, i) => getButton(item, i));
}
function getTitle(title, showCloseIcon, close) {
    if (!title) {
        return null;
    }
    return (<div className="dialog-header">
            <div className="title">{title}</div>
            {showCloseIcon ?
        <img className="close" onClick={close} src='../src/Dialog/x.svg'/>
        : null}
        </div>);
}
function getButton(item, key) {
    const _a = item || {}, { fn = fns, text = '' } = _a, itemProps = __rest(_a, ["fn", "text"]);
    return (<div key={key} onClick={fn} {...itemProps} className='button'>{text}</div>);
}
//# sourceMappingURL=index.jsx.map