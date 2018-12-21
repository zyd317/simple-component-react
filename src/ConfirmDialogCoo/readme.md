###使用
    ```
    初始化组件
    <Components ConfirmDialogCoo={ConfirmDialogCoo}/>
    ```
###配置
config = {
    contentType: 'confirm', // 【confirm/alert】confirm会有两个确认按钮，alert只有一个按钮，表示一种提示
    title: '提示', // 弹窗的内容
    content: '确定删除吗', // 弹窗的内容
    handleSure: this.close, // 处理点击确认按钮的函数，会自动关闭当前dialog，并执行handleSure
    handleClose: this.close, // 关闭按钮的函数，会自动调用
};

// 显示
COMPONENT.open('ConfirmDialogCoo', config);

// 隐藏
COMPONENT.close('ConfirmDialogCoo');