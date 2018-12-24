import {createEvent, dispatchEvent} from "./eventUtils";
import React, {Component} from 'react';
import {createPortal} from 'react-dom';

module.exports = {
    open: function(comp, config){
        // 先渲染一下这个组件
        createPortal(
            <div>
                {
                    comp ? React.createElement(props[renderCompName], {ref: renderCompName}) : ''
                }
            </div>,
            this.node
        );

        // 如果没有传入关闭方式的话，默认传入this.close
        if(!config.close){
            config.close = this.close.bind(this, comp);
        }
        this._action(comp, config, 'open');
    },
    update: function(comp, config){
        this._action(comp, config, 'update');
    },
    close: function(comp){
        this._action(comp, {}, 'close');
    },
    _action: function(comp, config, action){
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