/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import {createPortal} from 'react-dom';
class CompWrapper extends Component {
    constructor(props) {
        super(props);
        const component = document.getElementById('COMPONENT');
        if(component){
            this.node = component;
        } else {
            const doc = window.document;
            this.node = doc.createElement('div');
            this.node.setAttribute('id', 'COMPONENT');
            doc.body.appendChild(this.node);
        }
        this.state = {
            renderCompName: ''
        };

        let self = this;
        window.addEventListener('componentchange', (e) => {
            let {action, config, name} = e.detail || {};
            if(name && action && props[name]) {
                if(self.refs[name]) {
                    self.refs[name][action](config);
                } else {
                    self.setState({
                        renderCompName: name
                    }, () => {
                        self.refs[name][action](config);
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
        return createPortal(
            <div className={classNa}>
                {
                    comp ? React.createElement(props[renderCompName], {ref: renderCompName}) : ''
                }
            </div>,
            this.node
        )
    }
}

module.exports = {
    CompManager: require('./ComponentManager'),
    CompWrapper
};