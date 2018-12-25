import React from 'react';
import './index.scss';
/**
 * 都需要传入正确的width，保证剧中
 * top只支持单行展示
 * 默认是bottom，支持多行<br />换行
 */
export default function HoverContainer(props) {
    const {tips, className='', position="top"} = props;
    const style = {};
    // 如果是单行的话水平居中
    if(!tips.split('<br />')){
        style.textAlign = 'center';
    }
    return (
        <div className={`m_hover_container ${className} ${position}`}>
            <div className='icon'>?</div>
            <div className='content' style={style}>
                <div className="hover_content_main" dangerouslySetInnerHTML={{__html: tips}}/>
                <div className="hover_arrow_icon" />
            </div>
        </div>
    );
}