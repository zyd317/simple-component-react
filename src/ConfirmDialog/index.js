/**
 * 确认窗口
 */
import React, { Component } from 'react';
import Dialog from '../Dialog/index';
import './index.scss';
class ConfirmDialog extends Component {
    constructor (props) {
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
                  close={this.initClose}
                  buttons={[
                      {text: '确定', fn: (param)=>{
                          handleSure(param);
                          this.initClose();
                      }}, {text: '取消', fn: this.initClose},
                  ]}
              >{content}</Dialog>
          );
      }

      return (
          <Dialog
              title={title}
              showCloseIcon={false}
              close={this.initClose}
              buttons={[{text: '确定', fn: (param)=>{
                  handleClose && handleClose(param);
                  this.initClose();
              }}
              ]}
          >{content}</Dialog>
      );
  }

    open(config){
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