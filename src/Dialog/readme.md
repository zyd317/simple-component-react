###使用
    ```
    初始化组件
    import Dialog from '../Dialog/index';
    ```
###配置
```
// this.initClose = this.props.handleClose || this.close
<Dialog
  title='这里是dialog的title'
  showCloseIcon={false} // 表示是否展示右上角的关闭按钮，默认展示
  close={this.initClose} // 关闭父元素的方法，调用父元素的关闭，比如被Animate包裹的时候，会自动传入一个handleClose方法，关闭
  customClassName='my-class'
  buttons={[  // 默认展示"确定"按钮和"取消按钮"，都调用this.initClose
      {
        text: '确定',
        fn: (param)=>{
          handleSure(param); // 这种情况是先调用确定按钮的操作，再调用父元素的关闭方法
          this.initClose();
          }
      }, {
         text: '取消',
         fn: this.initClose
      }
  ]}
>这里是dialog的内容。如提示语句，输入框等</Dialog>

// 显示
COMPONENT.open('Dialog', config);

// 隐藏
COMPONENT.close('Dialog');

```