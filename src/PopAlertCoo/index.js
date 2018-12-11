/**
 * @author yidi.zhao
 */
import React, {Component} from 'react';
import DialogCoo from '../DialogCoo';
import './index.less';

class PopAlertCoo extends Component {
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.state = {
            content: '', // 文案
            status: 'success', // 提示类型,success/warning/error
            delay: 3000, // 展示时常
            hide: true
        }
    }

    componentDidUpdate () {
        const {scrollTimer, state, close} = this;
        const { delay, content } = state;
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        if (content) {
            this.scrollTimer = setTimeout(close, delay);
        }
    }

    render() {
        const { content, status, hide } = this.state;
        if(hide){
            return null;
        }
        return (
            <DialogCoo
                title=''
                showCloseIcon={false}
                buttons={[]}
                customClassName="__pop_alert_coo"
                close={this.close}
            >
                <div className={`dialog-status ${status}`}>{content}</div>
            </DialogCoo>
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
