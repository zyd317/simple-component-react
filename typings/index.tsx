import React from 'react';
import {ComponentManager, CompWrapper, Animation, ConfirmDialog, PopAlert, HoverAlert, Dialog, CooperateComponentV2} from './usualComponentWeb';
import {render} from "react-dom";

render(
    <HoverAlert position='right'>
        <div>使用多行文本</div>
        <div>不传icon属性，默认为"？"形式的icon</div>
        <div>position为悬浮框的位置，支持top/bottom/left/right</div>
        <div>children是悬浮框里的内容，支持html和string；tips属性只支持string。单行文本自动居中</div>
    </HoverAlert>,
    document.getElementById('hoverTips')
);

render(
    <HoverAlert position='bottom' icon={<span>修改一下</span>}>
        <div>icon支持html和string格式</div>
    </HoverAlert>,
    document.getElementById('hoverTipsIcon')
);

render(
    <HoverAlert position='left' icon={'啥都不写相当于一个普通div'} onClick={()=>{alert('haha')}} />,
    document.getElementById('hoverTipsLeftNormal')
);


const PopAlertAnimate = Animation(PopAlert);
const ConfirmDialogAnimate = Animation(ConfirmDialog);
render(
    <CompWrapper PopAlertAnimate={PopAlertAnimate} ConfirmDialog={ConfirmDialogAnimate} PopAlert={PopAlert}/>,
    document.getElementById('component')
);

// 方便测试，绑定到window上
window.CooperateComponentV2 = CooperateComponentV2;
window.ComponentManager = ComponentManager;

CooperateComponentV2.open("PopAlertAnimate", {
    content: '有动画的-默认组件',
    status: 'error'
});