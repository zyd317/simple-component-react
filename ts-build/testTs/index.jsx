import React from 'react';
import { SystemComponent, Animation, ConfirmDialog, PopAlert, HoverAlert, CustomComponent } from '../index';
import { render } from "react-dom";
render(<HoverAlert position='right'>
        <div>使用多行文本</div>
        <div>不传icon属性，默认为"？"形式的icon</div>
        <div>position为悬浮框的位置，支持top/bottom/left/right</div>
        <div>children是悬浮框里的内容，支持html和string；tips属性只支持string。单行文本自动居中</div>
    </HoverAlert>, document.getElementById('hoverTips'));
render(<HoverAlert position='bottom' icon={<span>修改一下</span>}>
        <div>icon支持html和string格式</div>
    </HoverAlert>, document.getElementById('hoverTipsIcon'));
render(<HoverAlert position='left' icon={'啥都不写相当于一个普通div'} onClick={() => { alert('haha'); }}/>, document.getElementById('hoverTipsLeftNormal'));
const { ComponentWrapper, ComponentManager } = CustomComponent;
const PopAlertAnimate = Animation(PopAlert);
const ConfirmDialogAnimate = Animation(ConfirmDialog);
render(<ComponentWrapper PopAlertAnimate={PopAlertAnimate} ConfirmDialog={ConfirmDialogAnimate} PopAlert={PopAlert}/>, document.getElementById('component'));
// 方便测试，绑定到window上
// window.ComponentManager = ComponentManager;
// @ts-ignore
window.CustomComponent = CustomComponent;
SystemComponent.open("PopAlertAnimate", {
    content: '有动画的-默认组件',
    status: 'error'
});
// function getLength(something: string | number): number {
//     if((something as string).length){
//         return (something as string).length;
//     }
//     return (something as number);
// }
// console.log(getLength("但我认为我"));
// console.log(getLength(21443242));
//# sourceMappingURL=index.jsx.map