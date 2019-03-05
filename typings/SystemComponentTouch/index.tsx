/**
 * 这个组件可以直接调用。
 */
import {render} from "react-dom";
import React from "react";
import {createEvent, dispatchEvent} from "../utils/eventUtils";
import Animation from '../Animation/index';
import ConfirmDialogTouch from '../ConfirmDialogTouch/index';
import ComponentWrapper from './ComponentWrapper'
import {string} from "prop-types";

// import的时候，判断__SYSTEM_COMPONENT_TOUCH是否存在，没有的话render组件到页面中。有的话不需要管了
function insertDom() {
    const com = document.getElementById('__SYSTEM_COMPONENT_TOUCH');
    if(!com){
        const doc = window.document;
        let node = doc.createElement('div');
        node.setAttribute('id', '__SYSTEM_COMPONENT_TOUCH');
        doc.body.appendChild(node);
        const ConfirmDialogTouchAnimate = Animation(ConfirmDialogTouch);
        render(<ComponentWrapper ConfirmDialogTouch={ConfirmDialogTouch}
                                 ConfirmDialogTouchAnimate={ConfirmDialogTouchAnimate}/>, node);
    }
}
insertDom();

interface config {
    close?: Function,
    [key: string]: any
}
type comp = Readonly<typeof string>
export default {
    open: function(comp: comp, config: config){
        // 如果没有传入关闭方式的话，默认传入this.close
        if(!config.close){
            config.close = this.close.bind(this, comp);
        }
        this._action(comp, config, 'open');
    },
    update: function(comp: comp, config: config){
        this._action(comp, config, 'update');
    },
    close: function(comp: comp){
        this._action(comp, {}, 'close');
    },
    _action: function(comp: comp, config: config, action: 'open' | 'update' | 'close'){
        if(comp) {
            // 页面中有节点才能进行展示隐藏，否则需要先插入再调用
            dispatchEvent(window, createEvent('systemcomponentchangetouch', {
                name: comp,
                action: action,
                config: config
            }));
        }
    }
};