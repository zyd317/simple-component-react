/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component, createElement} from 'react';
import {createPortal} from 'react-dom';
class ComponentWrapper extends Component<SimpleComponentReact.ComponentWrapperProps, SimpleComponentReact.ComponentWrapperState> {
    public renderCompRef: any;
    public node: HTMLElement | null;
    public state = {
        renderCompName: ''
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

        window.addEventListener('customcomponentchange', e => {
            const {action, config, name} = (e as any).detail || {} as SimpleComponentReact.ComponentWrapperEventDetail;
            if (name && action && (props as any)[name]) {
                if (this.renderCompRef[name]) {
                    this.renderCompRef[name][action](config);
                } else {
                    self.setState({
                        renderCompName: name
                    }, () => {
                        this.renderCompRef[name][action](config);
                    });
                }
            }
        });
    }
    public render() {
        const {state, props} = this;
        const {renderCompName} = state;
        const {classNa= ''} = props;
        const comp = renderCompName && (props as any)[renderCompName];
        if (!this.node || !comp) {
            return null;
        }
        const renderComp = createElement(
            comp,
            {ref: ref => this.renderCompRef[renderCompName] = ref}
        );
        return createPortal(<div className={classNa}>{renderComp}</div>, this.node);
    }
}

import ComponentManager from './ComponentManager';
export {ComponentManager, ComponentWrapper};
export default ComponentManager;