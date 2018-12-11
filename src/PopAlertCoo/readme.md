###使用
    ```
    初始化组件
    <Components PopAlertCoo={PopAlertCoo}/>
    ```
###配置
config = {
    content: '', // pop的提示文案内容
    status: 'success', // pop状态
    showCloseIcon: true, // 是否展示关闭按钮
    delay: 3000 // pop展示时常
};

// 显示
COMPONENT.open('PopAlertCoo', config);

// 隐藏
COMPONENT.close('PopAlertCoo');

```