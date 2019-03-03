/**
 * 测试一下component组件的展示
 * 测试一下hoverTips组件的展示
 */
import React from 'react';
import {render} from 'react-dom';
import {CustomComponent, PopAlert, ConfirmDialog, Animation, HoverAlert, Dialog, SystemComponent} from '../src' ;
import {SystemComponentTouch} from '../src/usualComponentTouch' ;

render(
    <HoverAlert tips='使用一行。文本居中显示，position为悬浮框的位置，支持top/bottom/left/right' position='top'/>,
    document.getElementById('hoverTipsOne')
);

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
    document.getElementById('hoverTipsLeft')
);

// const {ComponentManager, ComponentWrapper} = CustomComponent;
// const PopAlertAnimate = Animation(PopAlert);
// const ConfirmDialogAnimate = Animation(ConfirmDialog);
// render(
//     <ComponentWrapper PopAlertAnimate={PopAlertAnimate} ConfirmDialog={ConfirmDialogAnimate} PopAlert={PopAlert} ConfirmDialogTouch={ConfirmDialogTouch}/>,
//     document.getElementById('component')
// );

SystemComponentTouch.open('ConfirmDialogTouch', {
    title: '登录失败',
    content: '您的设备无法查询到对应的微信登录账号请尝试使用其他方式进行登录',
    btnText: '我知道了',
    handleSure: ()=>{alert("dsfd")},
});


// 方便测试，绑定到window上
// window.ComponentManager = ComponentManager;
//
// SystemComponent.open("PopAlertAnimate", {
//     content: '有动画的-默认组件',
//     status: 'error',
//     noHide: true
// });