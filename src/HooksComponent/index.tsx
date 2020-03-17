/**
 * 这个组件可以直接调用。
 */
import React from 'react';
import {createEvent, dispatchEvent} from 'utils/eventUtils';
import Animation from '../Animation';
import ConfirmDialog from '../ConfirmDialog';
import PopAlert from './PopAlert';
import ComponentWrapper from './ComponentWrapper';

const SystemComponent = {
    open(comp: string, config: any) {
        this._action(comp, config, 'open');
    },
    update(comp: string, config: any) {
        this._action(comp, config, 'update');
    },
    close(comp: string) {
        this._action(comp, {}, 'close');
    },
    _action(comp: string, config: any, action: 'open' | 'update' | 'close') {
        dispatchEvent(window, createEvent('systemcomponentchange', {
            name: comp,
            action,
            config,
        }));
    },
};
export default {ComponentWrapper, SystemComponent, Animation, ConfirmDialog, PopAlert};
