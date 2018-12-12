import React from 'react';
import {render} from 'react-dom';
import {CompWrapper, PopAlertCoo, ConfirmDialogCoo, Animation} from '../src/index.js';
const PopAlertCooAnimate = Animation(PopAlertCoo);
const ConfirmDialogCooAnimate = Animation(ConfirmDialogCoo);
render(
    <CompWrapper PopAlertCoo={PopAlertCooAnimate} ConfirmDialogCoo={ConfirmDialogCooAnimate}/>,
    document.getElementById('component')
);
