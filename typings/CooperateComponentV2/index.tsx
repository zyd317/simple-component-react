/**
 * 这个组件可以直接调用。
 */
import {render} from "react-dom";
import React from "react";
import {createEvent, dispatchEvent} from "./eventUtils";
import PopAlert from '../PopAlert/index';
import ConfirmDialog from '../ConfirmDialog/index';
import Animation from '../Animation/index';
import CompWrapper from './ComWrapper';

// import的时候，判断__COMPONENTV2是否存在，没有的话render组件到页面中。有的话不需要管了
function insertDom() {
    const com = document.getElementById('__COMPONENTV2');
    if(!com){
        const doc = window.document;
        let node = doc.createElement('div');
        node.setAttribute('id', '__COMPONENTV2');
        doc.body.appendChild(node);
        const PopAlertAnimate = Animation(PopAlert);
        const ConfirmDialogAnimate = Animation(ConfirmDialog);
        render(<CompWrapper PopAlert={PopAlert}
                            ConfirmDialog={ConfirmDialog}
                            ConfirmDialogAnimate={ConfirmDialogAnimate}
                            PopAlertAnimate={PopAlertAnimate}/>, node);
    }
}
insertDom();
interface config {
    close?: Function,
    [key: string]: any
}
export default {
    open: function(comp:string, config:config){
        // 如果没有传入关闭方式的话，默认传入this.close
        if(!config.close){
            config.close = this.close.bind(this, comp);
        }
        this._action(comp, config, 'open');
    },
    update: function(comp:string, config:config){
        this._action(comp, config, 'update');
    },
    close: function(comp:string){
        this._action(comp, {}, 'close');
    },
    _action: function(comp:string, config:config, action:'open' | 'update' | 'close'){
        if(comp) {
            // 页面中有节点才能进行展示隐藏，否则需要先插入再调用
            dispatchEvent(window, createEvent('SystemComponentChange', {
                name: comp,
                action: action,
                config: config
            }));
        }
    }
};