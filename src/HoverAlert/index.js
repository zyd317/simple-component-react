import React from 'react';
import './index.scss';
const fontSize = 12;
// const lineHeight = 17;
/**
 * 都需要传入正确的width，保证剧中
 * top只支持单行展示
 * 默认是bottom，支持多行
 * left todo
 */
export default function HoverContainer(props) {
    const {tips, className, position} = props;
    const tipsArray = tips.split('<br />');
    let tipsLength = 0; // 2英文=1个中文长度
    // let tipsHeight = 0;
    if(tipsArray && tipsArray.length){
        tipsArray.forEach((item)=>{
            const len = item.replace(/[^\x00-\xff]/g, '**').length / 2; // 2英文=1个中文长度
            if(len > tipsLength){
                tipsLength = len;
            }
        });
        // tipsHeight = tipsArray.length * lineHeight;
    } else {
        // 单行
        tipsLength = tips.replace(/[^\x00-\xff]/g, '**').length / 2; // 2英文=1个中文长度
        // tipsHeight = lineHeight;
    }
    const width = tipsLength * fontSize+1;
    const style = {width: `${width}px`, marginLeft: `${-width/2}px`};
    // 如果是单行的话水平居中
    if(!tipsArray){
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