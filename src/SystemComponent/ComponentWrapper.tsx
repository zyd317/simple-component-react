/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component, createElement} from 'react';
import {createPortal} from 'react-dom';
export default class ComponentWrapper
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
        this.node = document.getElementById('__SYSTEM_COMPONENT');
        this.state = {
            renderCompName: '',
        };

        window.addEventListener('systemcomponentchange', (e: any) => {
            const {action, config, name} = e.detail;
            if (name && action && self.props[name]) {
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
        const {classNa= ''} = props;
        const comp = renderCompName && props[renderCompName];
        if (!this.node || !comp) {
            return null;
        }
        return createPortal(
            <div className={classNa}>
                {
                    createElement(
                        comp,
                        {ref: (ref: React.RefObject<Element>) => this.renderCompRef[renderCompName] = ref},
                    )
                }
            </div>,
            this.node,
        );
    }
}
