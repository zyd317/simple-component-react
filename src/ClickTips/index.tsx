import React, {useEffect, useRef, useState} from 'react';
import './style.scss';
export default function ClickContainer(props: SimpleComponentReact.HoverContainerProps) {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef(null);
    const _has_listen_component = useRef(false);
    const listenerHandle = useRef((e: Event)=>{
        // 处理收起点击
        if(!ref.current.contains(e.target)){
            setShowContent(false)
        }
    });

    useEffect(()=>{
        if(!_has_listen_component.current){
            _has_listen_component.current = true;
            document.addEventListener('click', listenerHandle.current, false);
        }

        return ()=>{
            document.removeEventListener('click', listenerHandle.current, false);
        }
    }, []);

    useEffect(()=>{
        if(onToggleHide){
            onToggleHide(showContent)
        }
    }, [showContent]);

    const {tips, className= '', position= 'top', children, icon, onToggleHide} = props;
    return (
        <div {...props} className={`m_click_container_tips ${className} ${position} ${showContent ? 'hover': ''}`} ref={ref}>
            <div className='inner_content' onClick={()=>{
                setShowContent(!showContent);
            }}>
                {icon ? icon : <div className={`click_icon ${(tips || children) ? 'active' : ''} ${showContent ? 'hover': ''}`}/>}
            </div>
            {renderChildren()}
        </div>
    );

    function renderChildren(){
        const {tips, children} = props;
        let clas = 'click_content';
        // 如果是单行的话水平居中
        if (tips && typeof tips === 'string' && !(/<br \/>/.test(tips))) {
            clas += ' text_center';
        }
        if(showContent){
            if(tips || children){
                return (
                    <div className={clas}>
                        <div className="click_content_main">
                            {tips || children}
                        </div>
                        <div className="click_arrow_icon" />
                    </div>
                );
            }
            return null
        }
        return null;
    }
}
