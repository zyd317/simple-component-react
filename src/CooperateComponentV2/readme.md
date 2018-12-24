## usage

```
    import ComponentManager from '../ComponentManager';
    打开组件：
        ComponentManager.open("calendar", connfig);
    关闭组件:
        ComponentManager.close("calendar");
    更新组件：
        ComponentManager.update("calendar", connfig);
```

## 要求
承载的组件必须自己控制*组件的显示和影藏*且 必须包含*open,close,update*这三个操作API

## 与v1区别

.v1版本的实现是使用传动门，调用的时候需要手动将<CooperateComponent />插入到页面中
.v2的使用不需要将其插入到页面中。会自动判断页面是否有这个dom，然后替换这个dom里面的内容。
.各有收益。v1可以按需加载，继续使用上一次的dom渲染。v2使用起来更方便。