# simple-component-react
一个组件的库，使用react，支持组件分离

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
        <HoverAlert tips='测试一下hoverTips' width={150} position='top'/>,
        document.getElementById('hoverTips')
    );

    render(
        <CompWrapper PopAlertCoo={PopAlertCooAnimate} ConfirmDialogCoo={ConfirmDialogCooAnimate}/>,
        document.getElementById('component')
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
- [] autoprefixer add