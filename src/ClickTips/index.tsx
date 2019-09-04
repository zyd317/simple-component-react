import React, {Component} from 'react';
import './style.scss';
export default class ClickContainer extends Component<SimpleComponentReact.HoverContainerProps, any> {
    constructor(props: SimpleComponentReact.HoverContainerProps){
        super(props);
        this.state = {
            showContent: false
        }
    }

    render(){
        const {tips, className= '', position= 'top', children, icon} = this.props;
        const {showContent} = this.state;
        return (
            <div {...this.props} className={`m_click_container_tips ${className} ${position} ${showContent ? 'hover': ''}`}>
                <div onClick={()=>{
                    this.setState({
                        showContent: !showContent
                    })
                }}>
                    {icon ? icon : <div className={`icon ${(tips || children) ? 'active' : ''} ${showContent ? 'hover': ''}`}/>}
                </div>
                {this.renderChildren()}
            </div>
        );
    }

    renderChildren(){
        const {tips, children} = this.props;
        let clas = 'content';
        // 如果是单行的话水平居中
        if (tips && typeof tips === 'string' && !(/<br \/>/.test(tips))) {
            clas += ' text_center';
        }
        if(this.state.showContent){
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
