import React from 'react';
import './index.scss';
/**
 * 只给出hover的时候，乘放容器的样式和位置控制，也不管理内容的样式
 */
export default function HoverContainer(props) {
    const {className='', position="top", children, icon} = props;
    return (
        <div className={`m_hover_container ${className} ${position}`}>
            {icon}
            <div className='content'>
                <div className="hover_content_main">
                    {children}
                </div>
                <div className="hover_arrow_icon" />
            </div>
        </div>
    );
}