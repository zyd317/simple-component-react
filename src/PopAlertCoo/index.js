/**
 * @author yidi.zhao
 */
import React, {Component} from 'react';
import Dialog from '../Dialog';
import './index.scss';

class PopAlertCoo extends Component {
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        const {delayTime} = this.props;
        this.state = {
            content: '', // 文案
            status: 'success', // 提示类型,success/warning/error
            delayTime: delayTime,
            hide: true
        }
    }

    componentDidUpdate () {
        const {scrollTimer, state} = this;
        const { content, delayTime } = state;
        if(delayTime){
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            if (content) {
                this.scrollTimer = setTimeout(()=>{
                    window.COMPONENT.close('PopAlertCoo');
                }, delayTime);
            }
        }
    }

    render() {
        const { content, status, hide } = this.state;
        if(hide){
            return null;
        }
        return (
            <Dialog
                title=''
                showCloseIcon={false}
                buttons={[]}
                customClassName="__pop_alert_coo"
                close={()=>{window.COMPONENT.close('PopAlertCoo')}}
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

export default PopAlertCoo;
