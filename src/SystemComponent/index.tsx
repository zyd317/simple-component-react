/**
 * 这个组件可以直接调用。
 */
import React from 'react';
import {render} from 'react-dom';
import {createEvent, dispatchEvent} from 'utils/eventUtils';
import Animation from '../Animation';
import ConfirmDialog from '../ConfirmDialog';
import PopAlert from '../PopAlert';
import ComponentWrapper from './ComponentWrapper';

// import的时候，判断__SYSTEM_COMPONENT是否存在，没有的话render组件到页面中。有的话不需要管了
function insertDom () {
    const com = document.getElementById('__SYSTEM_COMPONENT');
    if (!com) {
        const doc = window.document;
        const node = doc.createElement('div');
        node.setAttribute('id', '__SYSTEM_COMPONENT');
        doc.body.appendChild(node);
        const PopAlertAnimate = Animation(PopAlert);
        const ConfirmDialogAnimate = Animation(ConfirmDialog);
        render(<ComponentWrapper PopAlert={PopAlert}
                            ConfirmDialog={ConfirmDialog}
                            ConfirmDialogAnimate={ConfirmDialogAnimate}
                            PopAlertAnimate={PopAlertAnimate}/>, node);
    }
}
insertDom();

const SystemComponent = {
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
            dispatchEvent((window as any), createEvent('systemcomponentchange', {
                name: comp,
                action,
                config,
            }));
        }
    },
};
export default SystemComponent;
