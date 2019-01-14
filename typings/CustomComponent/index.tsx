/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component, createElement} from 'react';
import {createPortal} from 'react-dom';
import ComponentManager from './ComponentManager';
interface Props {
    [key: string]: any;
}
interface state {
    renderCompName: string;
}
class ComponentWrapper extends Component<Props & {classNa?: string}, state> {
    private renderCompRef: Props = {};
    private readonly node: HTMLElement;
    public constructor(props: any) {
        super(props);
        let self = this;
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

        window.addEventListener('customcomponentchange', (e => {
            // @ts-ignore
            const {detail} = e;
            let {action, config, name} = detail;
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
        }))
    }
    render() {
        const {state, props} = this;
        const {renderCompName} = state;
        const {classNa = ''} = props;
        const comp = renderCompName && props[renderCompName];
        if(!this.node || !renderCompName){
            return null;
        }
        const renderComp = createElement(comp, {ref: (ref)=>(this.renderCompRef[renderCompName] = ref)});
        return createPortal(<div className={classNa}>{!comp ? '' : renderComp}</div>, this.node)
    }
}
export {ComponentManager, ComponentWrapper};