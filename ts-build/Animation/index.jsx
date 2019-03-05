/**
 * Created by yidi.zhao on 2018/11/11.
 */
import React, { Component } from 'react';
import Browser from '../utils/browser';
import './index.scss';
const STATUS_EMUN = {
    INIT: 'init',
    ANIMATING: 'animating'
};
const initState = {
    status: STATUS_EMUN.INIT
};
export default Animation;
function Animation(BeWrappedComponentAnimation) {
    class WrapperComponentAnimation extends Component {
        constructor(props) {
            super(props);
            this.state = initState;
            this.close = this.close.bind(this);
            this.myRef = React.createRef();
            this.initClose = this.props.handleClose || this.close;
        }
        open(config) {
            if (!this.myRef.current) {
                return;
            }
            this.myRef.current.open(config);
            let self = this;
            if (this.props.supportAnimate) {
                setTimeout(function () {
                    self.setState({
                        status: STATUS_EMUN.ANIMATING
                    });
                }, 50);
            }
        }
        close() {
            if (!this.myRef.current) {
                return;
            }
            if (!this.props.supportAnimate) {
                this.myRef.current.close();
            }
            else {
                this.setState({
                    status: STATUS_EMUN.INIT
                }, () => {
                    if (!this.myRef.current) {
                        return;
                    }
                    this.myRef.current.close();
                });
            }
        }
        update() {
            if (!this.myRef.current) {
                return;
            }
            this.myRef.current.update(...arguments);
        }
        /**
         * 传入handleClose，可以关闭当前组件
         */
        _componentRender() {
            return <BeWrappedComponentAnimation {...this.props} ref={this.myRef} handleClose={this.initClose}/>;
        }
        render() {
            const { supportAnimate } = this.props;
            if (!supportAnimate) {
                return this._componentRender();
            }
            else {
                const wrapperClass = ['animate-init'], { status } = this.state;
                if (STATUS_EMUN.ANIMATING === status) {
                    wrapperClass.push('animate-start');
                }
                return (<div className={wrapperClass.join(' ')}>
                        {this._componentRender()}
                    </div>);
            }
        }
    }
    WrapperComponentAnimation.defaultProps = {
        supportAnimate: Browser.ios || (Browser.android && Browser.osVersionN >= 6) || true
    };
    return WrapperComponentAnimation;
}
//# sourceMappingURL=index.jsx.map