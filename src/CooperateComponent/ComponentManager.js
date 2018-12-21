import {createEvent, dispatchEvent} from "./eventUtils";

module.exports = {
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
            let evt = createEvent('componentchange', {
                name: comp,
                action: action,
                config: config
            });
            dispatchEvent(window, evt);
        }
    }
};