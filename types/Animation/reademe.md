## usage
```
    import Calendar from '../calendar';
    import Animate from '../animation';
    const AnimateCalendar = Animate(Calendar);
```
>负责动画的高阶组件，调用组件的时候，会自动传递handleClose作为子元素的props，可以关闭这个动画蒙层。
>所以在所有的close方法中，都需要使用this.initClose = handleClose || this.close || fn;
>同时也需要this.open = this.open.bind(this);避免父元素调用this.ref.close的时候被重新调用到子元素上

## 要求
承载的组件必须自己控制*组件的显示和影藏*且 必须包含*open,close,update*这三个操作API