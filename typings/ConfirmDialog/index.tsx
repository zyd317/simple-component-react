/**
 * 确认窗口
 */
import React, { Component } from 'react';
import Dialog from '../Dialog/index';
import './index.scss';
interface props {
    handleClose: Function;
}
interface state {
    handleClose: Function;
    contentType: 'confirm' | 'alert';
    handleSure: Function;
    hide: boolean;
    title: string;
    content: string;
}
class ConfirmDialog extends Component<props, state> {
    private initClose : Function;
    constructor (props:props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        // 所有使用close函数的地方，都需要先判断一下，父元素是否传有close，如果传递了的话，需要使用父元素的
        this.initClose = this.props.handleClose || this.close;
        this.state = {
            hide: true,
            contentType: 'confirm', // alert
            title: '',
            content: '',
            handleSure: this.initClose,
            handleClose: this.initClose,
        };
    }

  render () {
      const { handleClose, contentType, handleSure, hide, title, content } = this.state;
      if(hide){
          return null;
      }
      if (contentType === 'confirm') {
          return (
              <Dialog
                  title={title}
                  close={handleClose}
                  buttons={[
                      {text: '确定', fn: handleSure},
                      {text: '取消', fn: handleClose},
                  ]}
              >{content}</Dialog>
          );
      }

      return (
          <Dialog
              title={title}
              showCloseIcon={false}
              close={handleClose}
              buttons={[{text: '确定', fn: handleClose}]}
          >{content}</Dialog>
      );
  }

    open(config: state){
        // 如果配置中传递了关闭的方法则需要先调用关闭方法，在调用元素关闭
        const {handleClose, handleSure} = config;
        if(handleClose){
            config.handleClose = ()=>{
                handleClose();
                this.initClose();
            }
        }
        if(handleSure){
            config.handleSure = ()=>{
                handleSure();
                this.initClose();
            }
        }
        this.setState({
            ...config,
            hide: false
        })
    };

    close(){
        this.setState({
            hide: true
        })
    }
}
export default ConfirmDialog;