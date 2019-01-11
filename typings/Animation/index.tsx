/**
 * Created by yidi.zhao on 2018/11/11.
 */
import React, {Component, ReactNode, RefObject} from 'react';
import Browser from './browser';
import './index.scss';

const STATUS_EMUN = {
    INIT: 'init',
    ANIMATING: 'animating'
};
interface BeWrappedComponent{ 
    ref: RefObject<{ open: Function; close: Function; update?: Function; }>; 
    handleClose: Function; 
    children?: ReactNode; 
    supportAnimate?: boolean | undefined; 
}
interface props {
    handleClose?: Function;
    supportAnimate?: boolean
}
interface state {
    status: string;
}
export default (BeWrappedComponent: any) => {
    class WrapperComponent extends Component<props, state> {
        private readonly myRef: RefObject<{
            open: Function;
            close: Function;
            update: Function;
        }>;
        private readonly initClose: Function;
        static defaultProps: { supportAnimate: boolean };
        constructor(props:props) {
            super(props);
            this.close = this.close.bind(this);
            this.myRef = React.createRef();
            this.initClose = this.props.handleClose || this.close;
            this.state = {
                status: STATUS_EMUN.INIT // 默认
            }
        }

        open(config:any) {
            if(!this.myRef.current){
                return ;
            }
            this.myRef.current.open(config);
            let self = this;
            if (this.props.supportAnimate) {
                setTimeout(function () {
                    self.setState({
                        status: STATUS_EMUN.ANIMATING
                    })
                }, 50)
            }
        }

        close() {
            if(!this.myRef.current){
                return ;
            }
            if (!this.props.supportAnimate) {
                this.myRef.current.close();
            } else {
                this.setState({
                    status: STATUS_EMUN.INIT
                }, ()=>{
                    if(!this.myRef.current){
                        return ;
                    }
                    this.myRef.current.close();
                })
            }
        }

        update() {
            if(!this.myRef.current){
                return ;
            }
            this.myRef.current.update(...arguments);
        }

        /**
         * 传入handleClose，可以关闭当前组件
         */
        _componentRender() {
            return <BeWrappedComponent{...this.props} ref={this.myRef} handleClose={this.initClose}/>
        }

        render() {
            const {supportAnimate} = this.props;
            if (!supportAnimate) {
                return this._componentRender();
            } else {
                const wrapperClass = ['animate-init'], {status} = this.state;
                if (STATUS_EMUN.ANIMATING === status) {
                    wrapperClass.push('animate-start');
                }
                return (
                    <div className={wrapperClass.join(' ')}>
                        {this._componentRender()}
                    </div>
                )
            }
        }
    }

    WrapperComponent.defaultProps = {
        supportAnimate: Browser.ios || (Browser.android && Browser.osVersionN >= 6) || true
    };
    return WrapperComponent;
}