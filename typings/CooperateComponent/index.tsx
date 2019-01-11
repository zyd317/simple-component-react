/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
interface Props {
    [key: string]: any;
}
interface state {
    renderCompName: string;
}
class CompWrapper extends Component<Props & {className: string}, state> {
    private renderCompRef: Props = object;
    private readonly node: HTMLElement;
    public constructor(props: any) {
        super(props);
        let self = this;
        const component = document.getElementById('COMPONENT');
        if(component){
            this.node = component;
        } else {
            const doc = window.document;
            this.node = doc.createElement('div');
            this.node.setAttribute('id', '__COMPONENT');
            doc.body.appendChild(this.node);
        }
        this.state = {
            renderCompName: ''
        };

        window.addEventListener('componentchange', (e => {
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
        const {classNa} = props;
        const comp = renderCompName && props[renderCompName];
        if(!this.node){
            return null;
        }
        return createPortal(
            <div className={classNa}>
                {
                    !comp ? React.createElement(
                        props[renderCompName],
                        {ref: (ref) => (this.renderCompRef[renderCompName] = ref)}
                        ) : ''
                }
            </div>,
            this.node
        )
    }
}
import ComponentManager from './ComponentManager';
import {object} from "prop-types";
export default {ComponentManager, CompWrapper};