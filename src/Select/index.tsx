import React, {Component} from 'react';
import './style.scss';
export default class Select extends Component<SimpleComponentReact.SelectProps, SimpleComponentReact.SelectState> {
    constructor(props: SimpleComponentReact.SelectProps) {
        super(props);
        this.state = {
            showOption: false,
        };
    }

    render() {
        const {showOption} = this.state;
        const {options = {}, value, position = 'top', placeholder, className = '', disabled} = this.props;
        const arr = Object.keys(options);
        const show = !disabled && showOption;
        return (
            <div className={`m_select_container ${className} ${disabled ? 'disable' : 'able'}`}>
                <div className="m_select_input" onClick={this.showOptions}>
                    {value ?
                        <div className="value">{options[value]}</div> :
                        <div className="tips value">{placeholder}</div>
                    }
                    <div className={`icon ${show ? 'rotate' : ''}`} />
                </div>
                {show ?
                    arr.length ?
                        <ul className={`m_select_option ${position}`}>
                            {arr.map(key =>
                                <li
                                    key={key}
                                    onClick={() => {this.onChange(key); }}
                                    className="m_select_option_item"
                                >
                                    {options[key]}
                                </li>,
                            )}
                        </ul> : <div className={`m_select_option ${position} no_result`}>暂无选择...</div>
                     : null
                }
            </div>
        );
    }

    onChange = (value: string) => {
        this.props.onChange(value);
        this.showOptions();
    }

    showOptions = () => {
        this.setState({
            showOption: !this.state.showOption,
        });
    }
}
