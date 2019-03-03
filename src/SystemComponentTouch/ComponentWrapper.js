/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
export default class ComponentWrapper extends Component {
    constructor(props) {
        super(props);
        let self = this;
        this.renderCompRef = {};
        this.node = document.getElementById('__SYSTEM_COMPONENT');
        this.state = {
            renderCompName: ''
        };

        window.addEventListener('systemcomponentchange', (e) => {
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
        if(!this.node){
            return null;
        }
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