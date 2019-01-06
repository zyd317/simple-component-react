###使用
    ```
    初始化组件
    <Components Dialog={Dialog}/>
    ```
###配置
```
config = {
    prefixCls: prefixCls || 'pgc-dialog', // dialog的wrapperClass
    title: title === undefined ? '删除确认' : title, // dialog的title
    showCloseIcon: showCloseIcon === undefined ? true : showCloseIcon, // 是否展示dialog的关闭按钮
    btns: btns || [ // dialog按钮内容
        { type: 'negative', className: '', text: '确认', fn: this.close},
        {type: 'default', className: '', text: '取消', fn: this.close}],
    customClassName: customClassName || '',
    children: children || '确认删除此评论？删除后不可恢复' // 文案
};

// 显示
COMPONENT.open('Dialog', config);

// 隐藏
COMPONENT.close('Dialog');

```