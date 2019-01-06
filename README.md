# simple-component-react
一个组件的库，使用react，支持组件分离

## Usage

### install

```bash
npm install simple-component-react --save
```

### use

```
const {COMPONENT, PopAlert, ConfirmDialog, Animation, HoverAlert} = require('../src') ;
const {CompManager, CompWrapper} = COMPONENT;

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


// 有动画的组件，需要使用Animation包裹一下。不需要动画的就直接当作props即可
const PopAlertAnimate = Animation(PopAlert);
const ConfirmDialogAnimate = Animation(ConfirmDialog);
render(
    <CompWrapper PopAlertAnimate={PopAlertAnimate} ConfirmDialog={ConfirmDialogAnimate} PopAlert={PopAlert}/>,
    document.getElementById('component')
);

// 调用PopAlert组件，提示弹窗
CompManager.open("PopAlertAnimate", {
    content: '有动画的',
    status: 'error'
});

// 调用PopAlert组件，提示弹窗
CompManager.open("PopAlert", {
    content: '没有动画的',
    status: 'success'
});

// 调用ConfirmDialog组件，确认弹窗
CompManager.open('ConfirmDialog', {
    contentType: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
    title: '提示', // 弹窗的内容
    content: '确定删除吗', // 弹窗的内容
    handleSure: ()=>{alert("dsfd")}, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
});

// 如果没有dom或者不想要render到页面上，是一个组件内部调用的话。可以调用perateComponentV2
// 会自动执行render(<CompWrapper PopAlert={PopAlert}/>, dom);
// 目前只支持
CooperateComponentV2.open("PopAlertAnimate", {
    content: '有动画的',
    status: 'error'
});
```

### todos

- [X] 收敛window全局变量，去掉全局变量污染
- [X] autoprefixer add
- [X] 将组件渲染到最外层的body子元素下
- [X] 支持alert组件和comfirm组件
- [X] 支持组件动画
- [X] 增加错误提示
- [X] 支持直接调用组件，如v2
- [ ] 增加移动端组件
