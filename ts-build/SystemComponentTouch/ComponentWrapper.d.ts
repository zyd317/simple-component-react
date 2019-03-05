/**
 * Created by yidi.zhao on 2018/5/11.
 */
import React, { Component } from 'react';
interface Props {
    [key: string]: any;
}
interface State {
    renderCompName: string;
}
export default class CompWrapper extends Component<Props, State> {
    private renderCompRef;
    private readonly node;
    constructor(props: Props);
    render(): React.ReactPortal | null;
}
export {};
