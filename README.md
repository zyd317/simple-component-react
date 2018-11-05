# componentTools
一个组件的库，使用react，支持组件分离

## Usage

### install

```bash
npm install componentTools --save
```

### use

```
    import CompWrapperTool from '../src/index.js';
    const {Animation, CompWrapper, Toast} = CompWrapperTool;
    const AnimateToast = Animation(Toast);
    render(
        <CompWrapper toastA={AnimateToast} toast={Toast}/>,
        document.getElementById('app')
    );
    window.COMPONENT.open('toast', config)
```

### todos
[]