/**
 * 确认窗口-移动端
 */
import React, { Component } from 'react';
import DialogTouch from '../DialogTouch';
import './style.scss';
class ConfirmDialog
    extends Component<SimpleComponentReact.ConfirmDialogProps, SimpleComponentReact.ConfirmDialogState> {
    initClose: any;
    constructor(props: SimpleComponentReact.ConfirmDialogProps) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        // 所有使用close函数的地方，都需要先判断一下，父元素是否传有close，如果传递了的话，需要使用父元素的
        this.initClose = this.props.handleClose || this.close;
        this.state = {
            hide: true,
            title: '',
            content: '',
            handleSure: this.close,
            handleClose: this.initClose,
        };
    }

  render() {
      const {hide, title, content, handleSure, btnTextCancel, btnTextSure, handleClose } = this.state;
      if (hide) {
          return null;
      }
      return (
          <DialogTouch
              title={title}
              btnTextCancel={btnTextCancel}
              btnTextSure={btnTextSure}
              handleSure={handleSure}
              handleClose={handleClose}
          >
              {content}
          </DialogTouch>
      );
  }

    open(config: SimpleComponentReact.ConfirmDialogState) {
        // 如果配置中传递了关闭的方法则需要先调用关闭方法，在调用元素关闭
        const {handleClose, handleSure} = config;
        if (handleClose) {
            config.handleClose = () => {
                handleClose();
                this.initClose();
            };
        }
        if (handleSure) {
            config.handleSure = () => {
                handleSure();
                this.initClose();
            };
        }
        this.setState({
            ...config,
            hide: false,
        });
    }

    close() {
        this.setState({
            hide: true,
        });
    }
}
export default ConfirmDialog;
