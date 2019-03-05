/**
 * 测试一下移动端组件的展示
 */
import React from 'react';
import {SystemComponentTouch, HoverAlert} from '../src/usualComponentTouch' ;
import {render} from "react-dom";
// SystemComponentTouch.open('ConfirmDialogTouch', {
//     title: '失败提示',
//     content: '失败了哦，请检查一下数据～',
//     btnText: '我知道了',
//     handleSure: ()=>{alert("dsfd")},
// });

render(
    <div> <HoverAlert/> 请输入正确的昵称</div>,
    document.getElementById('hoverTipsOneTouch')
);
window.SystemComponentTouch = SystemComponentTouch;