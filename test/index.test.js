/**
 * 测试一下component组件的展示
 * 测试一下hoverTips组件的展示
 */
import React from 'react';
import {render} from 'react-dom';
const {COMPONENT, PopAlertCoo, ConfirmDialogCoo, Animation, HoverAlert, HoverContainer} = require('../src') ;
const {CompManager, CompWrapper} = COMPONENT;
const PopAlertCooAnimate = Animation(PopAlertCoo);
const ConfirmDialogCooAnimate = Animation(ConfirmDialogCoo);

render(
    <HoverAlert tips='测试一下一行的bottom' position='bottom'/>,
    document.getElementById('hoverTipsOneBottom')
);
render(
    <HoverAlert tips='测试一下多行行的bottom<br />bottom<br />测试一下' position='bottom'/>,
    document.getElementById('hoverTipsBottom')
);
render(
    <HoverAlert tips='top<br />测试一下多行行的top' position='top'/>,
    document.getElementById('hoverTipsTop')
);
render(
    <HoverAlert tips='测试一下一行的top' position='top'/>,
    document.getElementById('hoverTipsOneTop')
);

render(
    <HoverAlert tips='测试一下一行的left' position='left'/>,
    document.getElementById('hoverTipsOneLeft')
);
render(
    <HoverAlert tips='发表时间：2017-01-01<br />定时时间：2017-01-01' position='left'/>,
    document.getElementById('hoverTipsLeft')
);
render(
    <HoverAlert tips='测试一下一行的right' position='right'/>,
    document.getElementById('hoverTipsOneRight')
);
render(
    <HoverAlert tips='发表时间：2017-01-01<br />定时时间：2017-01-01' position='right'/>,
    document.getElementById('hoverTipsRight')
);

render(
    <HoverAlert tips='发表时间：2017-01-01<br />定时时间：2017-01-01' position='right'>
        <span>测试一下children</span>
    </HoverAlert>,
    document.getElementById('hoverTipsRight')
);

render(
    <HoverContainer position='right' icon={<span><span>修改</span>修改</span>}>
        <div>测试一下children</div>
        <div>测试一下children1</div>
    </HoverContainer>,
    document.getElementById('hoverContainerRight')
);

// render(
//     <CompWrapper PopAlertCoo={PopAlertCooAnimate} ConfirmDialogCoo={ConfirmDialogCooAnimate}/>,
//     document.getElementById('component')
// );
//
// window.COMPONENT = CompManager;
// 调用PopAlertCoo组件，提示弹窗
// CompManager.open('PopAlertCoo', {
//     content: '删除成功', // 内容
//     status: 'warning', // 图案，提示类型。支持warning/success/error
// });

// 调用ConfirmDialogCoo组件，确认弹窗
// CompManager.open('ConfirmDialogCoo', {
//     contentType: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
//     title: '提示', // 弹窗的内容
//     content: '确定删除吗', // 弹窗的内容
//     handleSure: ()=>{}, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
//     handleClose: ()=>{}, // 关闭按钮的函数，会自动调用
// });
