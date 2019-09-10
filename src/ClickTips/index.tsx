import React, {useEffect, useState} from 'react';
import './style.scss';
export default function ClickContainer(props: SimpleComponentReact.HoverContainerProps) {
    const [showContent, setShowContent] = useState(false);

    useEffect(()=>{
        if(!window._has_listen_component){
            window._has_listen_component = true;
            document.addEventListener('click', (e)=>{
                // 处理收起点击
                const tar = e.target;
                if(!tar.closest('.m_click_container_tips')){
                    setShowContent(false)
                }
            }, false);
        }
    }, []);

    useEffect(()=>{
        if(onToggleHide){
            onToggleHide(showContent)
        }
    }, [showContent]);

    const {tips, className= '', position= 'top', children, icon, onToggleHide} = props;
    return (
        <div {...props} className={`m_click_container_tips ${className} ${position} ${showContent ? 'hover': ''}`}>
            <div className='inner_content' onClick={()=>{
                setShowContent(!showContent);
            }}>
                {icon ? icon : <div className={`icon ${(tips || children) ? 'active' : ''} ${showContent ? 'hover': ''}`}/>}
            </div>
            {renderChildren()}
        </div>
    );

    function renderChildren(){
        const {tips, children} = props;
        let clas = 'content';
        // 如果是单行的话水平居中
        if (tips && typeof tips === 'string' && !(/<br \/>/.test(tips))) {
            clas += ' text_center';
        }
        if(showContent){
            if(tips || children){
                return (
                    <div className={clas}>
                        <div className="hover_content_main">
                            {tips || children}
                        </div>
                        <div className="hover_arrow_icon" />
                    </div>
                );
            }
            return null
        }
        return null;
    }
}
