/**
 * @author yidi.zhao
 */
import React, {Component} from 'react';
import Dialog from '../Dialog';
import './index.scss';
const fn = ()=>{};
class PopAlert extends Component {
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        const {delayTime, noHide, handleClose} = this.props;
        this.state = {
            close: handleClose || this.close || fn, // 关闭弹窗的方式。因为本组件不能控制关闭，否则会丢失一些外部包裹的形式
            content: '', // 文案
            status: 'success', // 提示类型,success/warning/error
            delayTime: delayTime || 2500,
            noHide: noHide,
            hide: true
        }
    }

    /**
     * 先清除上一次的scrollTimer
     * 如果没有noHide参数，且content有内容，表示需要自动消失
     */
    componentDidMount() {
        const {scrollTimer, state} = this;
        const { content, delayTime, close, noHide } = state;
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        if(!noHide && content){
            this.scrollTimer = setTimeout(close, delayTime);
        }
    }

    render() {
        const { content, status, hide, close } = this.state;
        if(hide){
            return null;
        }
        return (
            <Dialog
                title=''
                showCloseIcon={false}
                buttons={[]}
                customClassName="__pop_alert_coo"
                close={close}
            >
                <div className={`dialog-status ${status}`}>{content}</div>
            </Dialog>
        );
    }

    open(config){
        this.setState({
            ...config,
            hide: false
        })
    }

    close(){
        this.setState({
            hide: true
        })
    }
}

export default PopAlert;
