/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
class ComponentWrapper extends Component {
    constructor(props) {
        super(props);
        let self = this;
        this.renderCompRef = {};
        const component = document.getElementById('__CUSTOM_COMPONENT');
        if(component){
            this.node = component;
        } else {
            const doc = window.document;
            this.node = doc.createElement('div');
            this.node.setAttribute('id', '__CUSTOM_COMPONENT');
            doc.body.appendChild(this.node);
        }
        this.state = {
            renderCompName: ''
        };

        window.addEventListener('customcomponentchange', (e) => {
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
        const renderComp = React.createElement(props[renderCompName], {ref: (ref) => (this.renderCompRef[renderCompName] = ref)});
        return createPortal(<div className={classNa}>{!comp ? '' : renderComp}</div>, this.node)
    }
}

import ComponentManager from './ComponentManager';
export {ComponentManager, ComponentWrapper};