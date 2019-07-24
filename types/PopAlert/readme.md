###使用
    ```
    初始化组件
    <Components PopAlert={PopAlert}/>
    ```
###配置
config = {
    content: '', // pop的提示文案内容
    status: 'success', // pop状态
    noHide: true, // 默认自动隐藏false.true为不隐藏
    delayTime: 2500, // 自动隐藏时间
};

// 显示
COMPONENT.open('PopAlert', config);

// 隐藏
COMPONENT.close('PopAlert');

```