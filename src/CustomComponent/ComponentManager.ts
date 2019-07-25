import {createEvent, dispatchEvent} from 'utils/eventUtils';
const ComponentManager = {
    open(comp: string, config: any) {
        // 如果没有传入关闭方式的话，默认传入this.close
        if (!config.close) {
            config.close = this.close.bind(this, comp);
        }
        this._action(comp, config, 'open');
    },
    update(comp: string, config: any) {
        this._action(comp, config, 'update');
    },
    close(comp: string) {
        this._action(comp, {}, 'close');
    },
    _action(comp: string, config: any, action: 'open' | 'update' | 'close') {
        if (comp) {
            // 页面中有节点才能进行展示隐藏，否则需要先插入再调用
            const component = document.getElementById('__CUSTOM_COMPONENT');
            if (component) {
                dispatchEvent((window as any), createEvent('customcomponentchange', {
                    name: comp,
                    action,
                    config
                }));
            } else {
                throw new Error('需要先注册了ComponentWrapper才能使用ComponentManager。详情查看https://github.com/zyd317/simple-component-react#readme的ComponentWrapper使用方式');
            }
        }
    }
};
export default ComponentManager;