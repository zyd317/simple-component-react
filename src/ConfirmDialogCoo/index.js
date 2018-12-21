/**
 * 确认窗口
 */
import React, { Component } from 'react';
import DialogCoo from '../Dialog/index';
import './index.scss';
class ConfirmDialog extends Component {
    constructor (props) {
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.state = {
            hide: true,
            contentType: 'confirm', // alert
            title: '',
            content: '',
            handleSure: this.close,
            handleClose: this.close,
        };
    }

  getContent () {
      const { contentType, title, content } = this.state;
      if (!contentType) {
          return null;
      }
      return (
          <div className="content-body">
              <div>
                  <span className="alarm-icon" />
                  <span className="title">{title}</span>
              </div>
              <div className="content">{content}</div>
          </div>
      );
  }

  render () {
      const { handleClose, contentType, handleSure, hide } = this.state;
      if(hide){
          return null;
      }
      if (contentType === 'confirm') {
          return (
              <DialogCoo
                  title={this.getContent()}
                  customClassName="confirm-dialog-coo"
                  closeCall={this.close}
                  btns={[
                      {
                          type: 'negative',
                          className: '',
                          text: '确定',
                          fn: handleSure,
                      },
                      {
                          type: 'default',
                          className: '',
                          text: '取消',
                          fn: this.close,
                      },
                  ]}
              >{null}</DialogCoo>
          );
      }

      return (
          <DialogCoo
              title={this.getContent()}
              showCloseIcon={false}
              customClassName="confirm-dialog-coo"
              closeCall={this.close}
              btns={[{
                  type: 'negative',
                  text: '确定',
                  fn: (param)=>{
                      if(handleClose){
                          handleClose(param);
                      } else {
                          this.close();
                      }
                  }}
                  ]}
          >{null}</DialogCoo>
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