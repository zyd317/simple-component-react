import {createEvent, dispatchEvent} from "./eventUtils";

interface config {
    close?: Function,
    [key: string]: any
}
export default {
    open: function(comp:string, config: config){
        // 如果没有传入关闭方式的话，默认传入this.close
        if(!config.close){
            config.close = this.close.bind(this, comp);
        }
        this._action(comp, config, 'open');
    },
    update: function(comp:string, config: config){
        this._action(comp, config, 'update');
    },
    close: function(comp:string){
        this._action(comp, {}, 'close');
    },
    _action: function(comp:string, config: config, action: 'open' | 'close' | 'update'){
        if(comp) {
            // 页面中有节点才能进行展示隐藏，否则需要先插入再调用
            const component = document.getElementById('__COMPONENT');
            if(component) {
                dispatchEvent(window, createEvent('componentchange', {
                    name: comp,
                    action: action,
                    config: config
                }));
            } else {
                throw new Error('需要先注册了CompWrapper才能使用ComponentManager。详情查看https://github.com/zyd317/simple-component-react#readme的CompWrapper使用方式');
            }
        }
    }
};