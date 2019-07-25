/**
 * Created by yidi.zhao on 2018/11/11.
 */
import React, {Component} from 'react';
import Browser from '../utils/browser';
import './style.scss';

const STATUS_EMUN = {
    INIT: 'init',
    ANIMATING: 'animating',
};
const supportAnimate = Browser.ios || (Browser.android && Browser.osVersionN >= 6) || true;
function BeWrappedComponent (args: any):
    (SimpleComponentReact.BeWrappedComponentType | any) {
    class WrapperComponent
        extends Component<SimpleComponentReact.AnimationProps, SimpleComponentReact.AnimationState> {
        myRef: React.RefObject<any>;
        initClose: () => void;
        static defaultProps: { supportAnimate: boolean };
        constructor(props: SimpleComponentReact.AnimationProps) {
            super(props);
            this.close = this.close.bind(this);
            this.myRef = React.createRef();
            this.initClose = this.props.handleClose || this.close;
            this.state = {
                status: STATUS_EMUN.INIT, // 默认
            };
        }

        open(config: any) {
            this.myRef.current.open(config);
            const self = this;
            if (this.props.supportAnimate) {
                setTimeout(() => {
                    self.setState({
                        status: STATUS_EMUN.ANIMATING,
                    });
                }, 50);
            }
        }

        close() {
            if (!this.props.supportAnimate) {
                this.myRef.current.close();
            } else {
                this.setState({
                    status: STATUS_EMUN.INIT,
                }, () => {
                    this.myRef.current.close();
                });
            }
        }

        update() {
            this.myRef.current.update(args);
        }

        /**
         * 传入handleClose，可以关闭当前组件
         */
        _componentRender() {
            return <BeWrappedComponent {...this.props} ref={this.myRef} handleClose={this.initClose}/>;
        }

        render() {
            const {supportAnimate} = this.props;
            if (!supportAnimate) {
                return this._componentRender();
            } else {
                const wrapperClass = ['animate-init'];
                const {status} = this.state;
                if (STATUS_EMUN.ANIMATING === status) {
                    wrapperClass.push('animate-start');
                }
                return (
                    <div className={wrapperClass.join(' ')}>
                        {this._componentRender()}
                    </div>
                );
            }
        }
    }

    WrapperComponent.defaultProps = {
        supportAnimate: supportAnimate
    };
    return WrapperComponent;
}

export default BeWrappedComponent;
