/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, { Component } from 'react';
import ComponentManager from './ComponentManager';
interface Props {
    [key: string]: any;
}
declare const initState: {
    renderCompName: string;
};
declare type State = Readonly<typeof initState>;
declare class ComponentWrapper extends Component<Props & {
    classNa?: string;
}, State> {
    readonly state: State;
    private renderCompRef;
    private readonly node;
    constructor(props: any);
    render(): React.ReactPortal | null;
}
export { ComponentManager, ComponentWrapper };
