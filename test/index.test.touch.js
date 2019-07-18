/**
 * 测试一下移动端组件的展示
 */
import React from 'react';
import {SystemComponentTouch, HoverAlert} from '../src' ;
import {render} from "react-dom";

render(
    <div onClick={()=>{
        SystemComponentTouch.open('ConfirmDialogTouch', {
            title: '失败提示',
            content: '失败了哦，请检查一下数据～',
            btnText: '我知道了',
            handleSure: ()=>{alert("dsfd")},
        });
    }}> <HoverAlert/> 请输入正确的昵称ConfirmDialogTouch</div>,
    document.getElementById('hoverTipsOneTouch')
);
window.SystemComponentTouch = SystemComponentTouch;