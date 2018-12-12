import React from 'react';
import './index.scss';

/**
 * 都需要传入正确的width，保证剧中
 * top只支持单行展示
 * 默认是bottom，支持多行
 * left todo
 */
export default function HoverContainer(props) {
    const {tips, className, width, position} = props;
    return (
        <div className={`m_hover_container ${className} ${position}`}>
            <div className='icon'>?</div>
            <div className='content' style={{width: `${width}px`, marginLeft: `${-width/2}px`}}>
                <div className="hover_content_main">
                    {tips}
                </div>
                <div className="hover_arrow_icon" />
            </div>
        </div>
    );
}