import React, {ReactElement} from 'react';
import './index.scss';
interface props {
    tips?: string;
    className?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children?: ReactElement<any> | JSX.Element[];
    icon?: ReactElement<any> | string;
    [key: string]: any
}
export default function HoverContainer(props: props) {
    const {tips, className='', position="top", children, icon} = props;
    let clas = 'content';
    // 如果是单行的话水平居中
    if(tips && typeof tips === 'string' && !(/<br \/>/.test(tips))){
        clas += ' text_center';
    }
    return (
        <div {...props} className={`m_hover_container_tips ${className} ${position}`}>
            {icon ? icon : <div className='icon'>?</div>}
            {(tips || children) ?
                <div className={clas}>
                    <div className="hover_content_main">
                        {tips || children}
                    </div>
                    <div className="hover_arrow_icon" />
                </div>
                : null
            }
        </div>
    );
}