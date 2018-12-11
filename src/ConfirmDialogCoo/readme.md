###使用
    ```
    初始化组件
    <Components ConfirmDialogCoo={ConfirmDialogCoo}/>
    ```
###配置
config = {
    contentKey: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
    dialogType: 'deleteConfirm', // 弹窗的内容，可以取index里面this.confirmDisplayString/this.alertDisplayString里面选择状态
    handleSure: this.close, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
    handleClose: this.close, // 关闭按钮的函数，会自动调用
    closeTea: '', // 关闭弹窗的时候，埋点的key
};

// 显示
COMPONENT.open('ConfirmDialogCoo', config);

// 隐藏
COMPONENT.close('ConfirmDialogCoo');

```