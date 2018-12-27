# simple-component-react
·一个组件的库，使用react，支持组件分离

## Usage

### install

```bash
npm install simple-component-react --save
```

### use

```
    const {COMPONENT, PopAlertCoo, ConfirmDialogCoo, Animation, HoverAlert} = require('../src') ;
    const {CompManager, CompWrapper} = COMPONENT;
    const PopAlertCooAnimate = Animation(PopAlertCoo);
    const ConfirmDialogCooAnimate = Animation(ConfirmDialogCoo);

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

    // 调用PopAlertCoo组件，提示弹窗
    CompManager.open('PopAlertCoo', {
        content: '删除成功', // 内容
        status: 'warning', // 图案，提示类型。支持warning/success/error
    });
    // 调用ConfirmDialogCoo组件，确认弹窗
    CompManager.open('ConfirmDialogCoo', {
        contentType: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
        title: '提示', // 弹窗的内容
        content: '确定删除吗', // 弹窗的内容
        handleSure: this.close, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
        handleClose: this.close, // 关闭按钮的函数，会自动调用
    });
```

### todos

- [X] 收敛window全局变量，去掉全局变量污染
- [X] autoprefixer add
- [X] 将组件渲染到最外层的body子元素下
