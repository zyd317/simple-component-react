# simple-component-react
一个组件的库，使用react，支持组件分离

## Usage

### install

```bash
npm install simple-component-react --save
```

### use

> HoverAlert组件调用方式如下

![HoverAlert组件样式](/HoverTips.png)

```
import {HoverAlert} from 'simple-component-react';

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
```

> 只需要系统组件，不需要自定义的时候，可以直接调用如下方式

![popAlert](/popAlert.png)
![confirm](/confirm.png)
```
import {SystemComponent} from 'simple-component-react';
// 如果没有dom或者不想要render到页面上，是一个组件内部调用的话。可以调用SystemComponent
// 会自动执行render(<ComponentWrapper PopAlert={PopAlert}/>, dom);
SystemComponent.open("PopAlertAnimate", {
    content: '有动画的，不需要设置自动隐藏',
    status: 'error',
    noHide: true
});
```

> Animation：负责动画的高阶组件，调用组件的时候，会自动传递 __handleClose__ 作为子元素的props，可以关闭这个动画蒙层。
> 所以在所有的close方法中，都需要使用 __this.initClose = handleClose || this.close || fn;__
> 同时也需要this.open = this.open.bind(this); __避免父元素调用this.ref.close的时候被重新调用到子元素上__
> 需要自定义组件的时候，如下方式
```
import {CustomComponent, PopAlert, ConfirmDialog, Animation} from 'simple-component-react';
const {ComponentManager, ComponentWrapper} = CustomComponent;
const PopAlertAnimate = Animation(PopAlert);
const ConfirmDialogAnimate = Animation(ConfirmDialog);
render(
    <ComponentWrapper PopAlertAnimate={PopAlertAnimate} ConfirmDialog={ConfirmDialogAnimate} PopAlert={PopAlert}/>,
    document.getElementById('component')
);

// 调用PopAlert组件，提示弹窗
ComponentManager.open("PopAlertAnimate", {
    content: '有动画的，需要设置自动隐藏时间',
    status: 'error',
    delayTime: 2500 // 默认值，默认隐藏时间
});

// 调用PopAlert组件，提示弹窗
ComponentManager.open("PopAlert", {
    content: '没有动画的，不使用Animate包裹即可',
    status: 'success'
});

// 调用ConfirmDialog组件，确认弹窗
ComponentManager.open('ConfirmDialog', {
    contentType: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
    title: '提示', // 弹窗的内容
    content: '确定删除吗', // 弹窗的内容
    handleClose: ()=>{alert("dsfd")}, // 默认有，关闭当前组件。也可以传入自定义函数，调用之后会自定关闭当前组件。
    handleSure: ()=>{alert("dsfd")}, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
});
```

> 需要使用dialog组件，调用方式如下
> 也可以参照《[ConfirmDialog](https://github.com/zyd317/simple-component-react/blob/master/src/ConfirmDialog/index.js)》组件，是一个完整的例子
```
import React, { Component } from 'react';
import {Dialog} from 'simple-component-react';
const fn = ()=>{};
class DialogDemo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hide: true,
            text: ''
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.initClose = this.props.handleClose  || this.close; // 如果可能需要动画的话，需要使用handleClose，每个地方调用close的时候，都调用父元素的关闭，再由父元素去调用关闭当前dialog的方法
        this.confirmValidDialog = this.confirmValidDialog.bind(this);
    }

    confirmValidDialog(){
        this.initClose();
        window.open('https://github.com/zyd317/simple-component-react/blob/master/src/ConfirmDialog/index.js', '_blank');
    }

    render () {
        if(this.state.hide){
            return null;
        }
        return (
            <Dialog
              title='这里是dialog的title'
              showCloseIcon={false} // 表示是否展示右上角的关闭按钮，默认展示
              close={this.initClose} // 点击dialog的时候会调用。关闭父元素的方法，调用父元素的关闭，比如被Animate包裹的时候，会自动传入一个handleClose方法，关闭
              customClassName='my-class'
              buttons={[  // 默认展示"确定"按钮和"取消按钮"，都调用this.initClose
                  {
                    text: '确定',
                    fn: this.confirmValidDialog
                  }, {
                     text: '取消',
                     fn: this.initClose
                  }
              ]}
            >
                这里是dialog的内容。如提示语句，输入框等
            </Dialog>
        );
    }

    open(config){
        this.setState({
            ...config,
            hide: false
        })
    };
    close(){
        this.setState({
            hide: true
        })
    };
}
export default DialogDemo;
```
>
> 需要按需加载的时候应该使用下面的调用方式
>
```
import {Dialog} from 'simple-component-react/lib/usualComponentWeb';
```

>
> 移动端部分组件-但是需要支持rem
>
![ConfirmDialogTouch](/ConfirmDialogTouch.png)
```
import {SystemComponentTouch} from 'simple-component-react/lib/usualComponentTouch';
SystemComponentTouch.open('ConfirmDialogTouch', {
    title: '失败提示',
    content: '失败了哦，请检查一下数据～',
    btnText: '我知道了',
    handleSure: ()=>{alert("dsfd")},
});
```

### todos

- [X] 收敛window全局变量，去掉全局变量污染
- [X] autoPrefix add
- [X] 将组件渲染到最外层的body子元素下
- [X] 支持alert组件和confirm组件
- [X] 支持组件动画
- [X] 增加错误提示
- [X] 支持直接调用组件，如v2
- [X] 实现按需加载
- [X] 增加支持typeScript
- [X] 增加移动端组件
