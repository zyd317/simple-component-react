import React from 'react';
import {render} from 'react-dom';
import {CompWrapper, PopAlertCoo, ConfirmDialogCoo, Animation, HoverAlert} from '../src/index.js';
const PopAlertCooAnimate = Animation(PopAlertCoo);
const ConfirmDialogCooAnimate = Animation(ConfirmDialogCoo);
render(
    <CompWrapper PopAlertCoo={PopAlertCooAnimate} ConfirmDialogCoo={ConfirmDialogCooAnimate}/>,
    document.getElementById('component')
);

render(
    <HoverAlert tips='测试一下hover的弹窗' width={150} position='top'/>,
    document.getElementById('app1')
);
