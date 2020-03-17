import React, {useCallback, useEffect, useState} from 'react';
export default function ComponentWrapper(props: any) {
    const [renderCompName, setRenderCompName] = useState('');
    const [propsConfig, setPropsConfig] = useState({});
    const hide = useCallback(()=>setRenderCompName(''), []);
    useEffect(() => {
        window.addEventListener('systemcomponentchange', (e: any) => {
            const {action, config, name} = e.detail;
            switch (action) {
                case 'open':
                    setRenderCompName(name);
                    setPropsConfig(config);
                    break;
                default:
                    setRenderCompName('');
            }
        });
    }, []);

    const Comp = renderCompName && props[renderCompName];
    if (!Comp) {
        return null;
    }
    return (
        <Comp {...propsConfig} hide={hide}/>
    );
}
