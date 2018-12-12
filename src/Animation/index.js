/**
 * Created by yidi.zhao on 2018/11/11.
 */
import React, {Component} from 'react';
import Browser from './browser';
import './index.scss';

const STATUS_EMUN = {
    INIT: 'init',
    ANIMATING: 'animating'
};

export default BeWrappedComponent => {
    class WrapperComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                status: STATUS_EMUN.INIT // 默认
            }
        }

        open(config) {
            this.ref.open(config);
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
            if (!this.props.supportAnimate) {
                this.ref.close();
            } else {
                this.setState({
                    status: STATUS_EMUN.INIT
                })
            }
        }

        update() {
            this.ref.update(...arguments);
        }

        storeRef(ref) {
            this.ref = ref;
        }

        _componentRender() {
            return <BeWrappedComponent
                {...this.props}
                ref = {this.storeRef.bind(this)}
            />
        }

        render() {
            const {supportAnimate} = this.props;
            if (!supportAnimate) {
                return this._componentRender();
            } else {
                let wrapperClass = ['animate-init'],
                    {status} = this.state;
                if (STATUS_EMUN.ANIMATING === status) {
                    wrapperClass.push('animate-start')
                }
                wrapperClass = wrapperClass.join(' ');
                return (
                    <div className={wrapperClass}>
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
};