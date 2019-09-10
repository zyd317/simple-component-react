/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component, createElement} from 'react';
import {createPortal} from 'react-dom';
class ComponentWrapper
    extends Component<SimpleComponentReact.ComponentWrapperProps, SimpleComponentReact.ComponentWrapperState> {
    renderCompRef: any;
    node: HTMLElement | null;
    state = {
        renderCompName: '',
    };
    constructor(props: SimpleComponentReact.ComponentWrapperProps) {
        super(props);
        const self = this;
        this.renderCompRef = {};
        const component = document.getElementById('__CUSTOM_COMPONENT');
        if (component) {
            this.node = component;
        } else {
            const doc = window.document;
            this.node = doc.createElement('div');
            this.node.setAttribute('id', '__CUSTOM_COMPONENT');
            doc.body.appendChild(this.node);
        }

        window.addEventListener('customcomponentchange', (e: any) => {
            const {action, config, name} = e.detail;
            if (name && action && props[name]) {
                if (this.renderCompRef[name]) {
                    this.renderCompRef[name][action](config);
                } else {
                    self.setState({
                        renderCompName: name,
                    }, () => {
                        this.renderCompRef[name][action](config);
                    });
                }
            }
        });
    }
    render() {
        const {state, props} = this;
        const {renderCompName} = state;
        const {classNa = ''} = props;
        const comp = renderCompName && props[renderCompName];
        if (!this.node || !comp) {
            return null;
        }
        const renderComp = createElement(
            comp,
            {ref: ref => this.renderCompRef[renderCompName] = ref},
        );
        return createPortal(<div className={classNa}>{renderComp}</div>, this.node);
    }
}

import ComponentManager from './ComponentManager';
export default {ComponentManager, ComponentWrapper};
