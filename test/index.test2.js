/**
 * 模拟一下多处import会不会浪费内存
 * 实际上都是共享同一个__COMPONENTV2 实例dom
 * 当你只需要popAlert和confirmDialog两个组件的时候，可以直接调用SystemComponent
 */
import React from 'react';
import {SystemComponent} from '../src';
window.SystemComponent = SystemComponent;