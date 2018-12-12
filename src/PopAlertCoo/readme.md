###使用
    ```
    初始化组件
    <Components PopAlertCoo={PopAlertCoo}/>
    ```
###配置
config = {
    content: '', // pop的提示文案内容
    status: 'success', // pop状态
};

// 显示
COMPONENT.open('PopAlertCoo', config);

// 隐藏
COMPONENT.close('PopAlertCoo');

```