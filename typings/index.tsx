import React from 'react';
import {ComponentManager, CompWrapper, Animation, ConfirmDialog, PopAlert, HoverAlert, Dialog, CooperateComponentV2} from './usualComponentWeb';
import {render} from "react-dom";

render(
    <HoverAlert position='left' icon='啥都不写相当于一个普通div' onClick={()=>{alert('haha')}} />,
    document.getElementById('hoverTipsLeft')
);