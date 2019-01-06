###使用
    ```
    初始化组件
    <Components PopAlert={PopAlert}/>
    ```
###配置
config = {
    content: '', // pop的提示文案内容
    status: 'success', // pop状态
};

// 显示
COMPONENT.open('PopAlert', config);

// 隐藏
COMPONENT.close('PopAlert');

```