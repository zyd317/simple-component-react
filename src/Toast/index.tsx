/**
 * Toast-移动端
 */
import React, { Component } from 'react';
import './style.scss';
class Toast
    extends Component<SimpleComponentReact.ConfirmDialogProps, {hide: boolean;text: string}> {
    initClose: any;
    constructor(props: SimpleComponentReact.ConfirmDialogProps) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        // 所有使用close函数的地方，都需要先判断一下，父元素是否传有close，如果传递了的话，需要使用父元素的
        this.initClose = this.props.handleClose || this.close;
        this.state = {
            hide: true,
            text: '',
        };
    }

  render() {
      const {hide, text } = this.state;
      if (hide) {
          return null;
      }
      return (
          <div className='m-toast-touch'>
              <div>
                  {text}
              </div>
          </div>
      );
  }

    open(config: {text: string}) {
        this.setState({
            ...config,
            hide: false,
        });

        // 3s之后消失
        window.setTimeout(this.initClose, 2000);
    }

    close() {
        this.setState({
            hide: true,
        });
    }
}
export default Toast;
