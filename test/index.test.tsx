/**
 * 测试一下component组件的展示
 * 测试一下hoverTips组件的展示
 */
import React from 'react';
import {render} from 'react-dom';
import {Animation, ConfirmDialog, CustomComponent, HoverAlert, PopAlert, Select, SystemComponent} from '../src/index';

render(
    <HoverAlert tips="使用一行。文本居中显示，position为悬浮框的位置，支持top/bottom/left/right" position="top"/>,
    document.getElementById('hoverTipsOne'),
);

const list = {
    id: 'label',
    id2: 'label2',
};

render(
    <Select
        options={list}
        onChange={value => console.log(value)}
        value={'id2'}
        position="top"
        placeholder="label"
        disabled={true}
    />
    , document.getElementById('Select'),
);

render(
    <HoverAlert position="right">
        <div>使用多行文本</div>
        <div>不传icon属性，默认为"？"形式的icon</div>
        <div>position为悬浮框的位置，支持top/bottom/left/right</div>
        <div>children是悬浮框里的内容，支持html和string；tips属性只支持string。单行文本自动居中</div>
    </HoverAlert>
    , document.getElementById('hoverTips'),
);

render(
    <HoverAlert position="bottom">
        <div>icon支持html和string格式</div>
    </HoverAlert>
    , document.getElementById('hoverTipsIcon'),
);

render(
    <HoverAlert position="left" icon={'啥都不写相当于一个普通div'} onClick={() => {alert('haha'); }} />
    , document.getElementById('hoverTipsLeft'),
);
render(
    <HoverAlert position="right">
        <div>asnbgjbhbfgjkbdfghbdfhsjbdg</div>
    </HoverAlert>
    , document.getElementById('hoverTipsRight'),
);

const {ComponentManager, ComponentWrapper} = CustomComponent;
const PopAlertAnimate = Animation(PopAlert);
const ConfirmDialogAnimate = Animation(ConfirmDialog);
render(
    <ComponentWrapper
        PopAlertAnimate={PopAlertAnimate}
        ConfirmDialog={ConfirmDialogAnimate}
        PopAlert={PopAlert}
    />
    , document.getElementById('component'),
);

// 方便测试，绑定到window上
window.ComponentManager = ComponentManager;

SystemComponent.open('PopAlertAnimate', {
    content: '有动画的-默认组件',
    status: 'error',
    noHide: true,
});
