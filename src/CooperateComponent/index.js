/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, {Component} from 'react';
import { createEvent, dispatchEvent } from "./eventUtils";

window.COMPONENT = {
    open: function (comp, config) {
        this._action(comp, config, 'open');
    },
    update: function (comp, config) {
        this._action(comp, config, 'update');
    },
    close: function (comp) {
        this._action(comp, {}, 'close');
    },
    _action: function (comp, config, action) {
        if(comp) {
            let evt = createEvent('componentchange', {
                name: comp,
                action: action,
                config: config
            });
            dispatchEvent(window, evt);
        }
    }
};

export default class CompWrapper extends Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            renderCompName: ''
        };
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
        return (
            <div className={classNa}>{
                comp ? React.createElement(props[renderCompName], {ref: renderCompName}) : ''
            }</div>
        )
    }
}