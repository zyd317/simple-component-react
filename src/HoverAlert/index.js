import React from 'react';
import './index.scss';

export default function HoverContainer(props) {
    const {tips, className, width} = props;
    return (
        <div className={`m_hover_container ${className}`}>
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