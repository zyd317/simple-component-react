/**
 * 模拟一下多处import会不会浪费内存
 * 实际上都是共享同一个__COMPONENTV2 实例dom
 * 当你只需要popAlert和confirmDialog两个组件的时候，可以直接调用CooperateComponentV2
 */
import React from 'react';
const {CooperateComponentV2} = require('../src') ;
window.COMPONENTV2 = CooperateComponentV2;