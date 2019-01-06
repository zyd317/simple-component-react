/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
export default class CompWrapper extends Component {
    constructor(props) {
        super(props);
        let self = this;
        this.renderCompRef = {};
        this.node = document.getElementById('__COMPONENTV2');
        this.state = {
            renderCompName: ''
        };

        window.addEventListener('componentchangeV2', (e) => {
            let {action, config, name} = e.detail || {};
            if(name && action && props[name]) {
                if(this.renderCompRef[name]) {
                    this.renderCompRef[name][action](config);
                } else {
                    self.setState({
                        renderCompName: name
                    }, () => {
                        this.renderCompRef[name][action](config);
                    })
                }
            }
        });
    }
    render() {
        const {state, props} = this;
        const {renderCompName} = state;
        const {classNa=''} = props;
        const comp = renderCompName && props[renderCompName];
        // todo
        // 如果props里面没有这个component的话，需要对component加上这个props
        return createPortal(
            <div className={classNa}>
                {
                    comp ? React.createElement(
                        props[renderCompName],
                        {ref: (ref) => (this.renderCompRef[renderCompName] = ref)}
                    ) : ''
                }
            </div>,
            this.node
        )
    }
}