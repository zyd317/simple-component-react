import React from 'react';
import './tipsStyle.scss';
import './style.scss';
export default function HoverContainer (props: SimpleComponentReact.HoverContainerProps) {
    const {tips, className= '', position= 'top', children, icon} = props;
    let clas = 'content';
    // 如果是单行的话水平居中
    if (tips && typeof tips === 'string' && !(/<br \/>/.test(tips))) {
        clas += ' text_center';
    }
    return (
        <div {...props} className={`m_container_tips m_hover_container_tips ${className} ${position}`}>
            {icon ? icon : <img src={require('../static/ask.svg')} className={`icon ${(tips || children) ? 'active' : ''}`} />}
            {(tips || children) ?
                <div className={clas}>
                    <div className="content_main hover_content_main">
                        {tips || children}
                    </div>
                    <div className="arrow_icon hover_arrow_icon" />
                </div>
                : null
            }
        </div>
    );
}
