/**
 * 这个组件可以直接调用。
 */
import {render} from "react-dom";
import React from "react";
import {createEvent, dispatchEvent} from "./eventUtils";
import PopAlert from '../PopAlert';
import ConfirmDialog from '../ConfirmDialog';
import Animation from '../Animation';
import CompWrapper from './ComWrapper'

function insertDom() {
    const com = document.getElementById('__COMPONENTV2');
    let node = null;
    if(com){
        node = com;
    } else {
        const doc = window.document;
        node = doc.createElement('div');
        node.setAttribute('id', '__COMPONENTV2');
        doc.body.appendChild(node);
    }
    const PopAlertAnimate = Animation(PopAlert);
    const ConfirmDialogAnimate = Animation(ConfirmDialog);
    render(<CompWrapper PopAlert={PopAlert}
                        ConfirmDialog={ConfirmDialog}
                        ConfirmDialogAnimate={ConfirmDialogAnimate}
                        PopAlertAnimate={PopAlertAnimate}/>, node);
}
insertDom();

export default {
    open: function(comp, config){
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
            // 页面中有节点才能进行展示隐藏，否则需要先插入再调用
            dispatchEvent(window, createEvent('componentchangeV2', {
                name: comp,
                action: action,
                config: config
            }));
        }
    }
};