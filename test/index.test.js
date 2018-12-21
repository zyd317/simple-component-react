/**
 * 测试一下component组件的展示
 * 测试一下hoverTips组件的展示
 */
import React from 'react';
import {render} from 'react-dom';
const {CompWrapper, PopAlertCoo, ConfirmDialogCoo, Animation, HoverAlert} = require('../src') ;
const PopAlertCooAnimate = Animation(PopAlertCoo);
const ConfirmDialogCooAnimate = Animation(ConfirmDialogCoo);
render(
    <CompWrapper PopAlertCoo={PopAlertCooAnimate} ConfirmDialogCoo={ConfirmDialogCooAnimate}/>,
    document.getElementById('component')
);

render(
    <HoverAlert tips='测试一下hoverTips' width={150} position='top'/>,
    document.getElementById('hoverTips')
);
