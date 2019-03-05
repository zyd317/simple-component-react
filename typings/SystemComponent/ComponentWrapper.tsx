/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
interface Props {
    [key: string]: any;
}
interface State {
    renderCompName: string;
}
export default class CompWrapper extends Component<Props, State> {
    private renderCompRef : Props = {};
    private readonly node : Element | HTMLElement | null;
    constructor(props: Props) {
        super(props);
        let self = this;
        this.node = document.getElementById('__SYSTEM_COMPONENT');
        this.state = {
            renderCompName: ''
        };
        window.addEventListener('systemcomponentchange', (e:any) => {
            let {action='', config={}, name=''} = e.detail || {};
            if(props[name]) {
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
        if(!this.node || !comp){
            return null;
        }
        return createPortal(
            <div className={classNa}>
                {
                    React.createElement(
                        comp,
                        {ref: ref => this.renderCompRef[renderCompName] = ref}
                    )
                }
            </div>,
            this.node
        )
    }
}