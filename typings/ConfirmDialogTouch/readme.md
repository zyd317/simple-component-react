###使用
    ```
    初始化组件
    <Components ConfirmDialog={ConfirmDialog}/>
    ```
###配置
config = {
    title: '登录失败',
    content: '您的设备无法查询到对应的微信登录账号请尝试使用其他方式进行登录',
    btnText: '我知道了',
    handleSure: ()=>{alert("dsfd")},
};

// 显示
COMPONENT.open('ConfirmDialog', config);

// 隐藏
COMPONENT.close('ConfirmDialog');