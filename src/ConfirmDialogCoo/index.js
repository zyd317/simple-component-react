/**
 * 确认窗口
 */
import React, { Component } from 'react';
import DialogCoo from '../DialogCoo/index';
import './index.less';
const confirmDisplayString = {
    deleteConfirm: {
        title: '删除确认',
        content: '删除的内容不可恢复。重复发表系统不再推荐，请谨慎删除。',
    },
    deleteDelayConfirm: {
        title: '删除确认',
        content: (<p>删除的内容不可恢复。重复发表系统不再推荐，请谨慎删除。<br /><br />这篇文章已被系统弹窗推荐，确认删除，文章将在弹窗推荐的24小时之后才会完全删除。</p>),
    },
    draftDeleteConfirm: {
        title: '删除确认',
        content: '删除的内容不可恢复，确定删除？',
    },
    sourceDeleteConfirm: {
        title: '删除确认',
        content: '优化助手提供的标题/封面如果不满意可删除，但删除后不可恢复，请谨慎操作。',
    },
    editConfirm: {
        title: '温馨提示',
        content: '频繁修改会影响读者阅读效率和推荐效果，建议编辑完善后再发表。',
    },
    setTopConfirm: {
        title: '提示',
        content: '同时只支持一篇图文或视频置顶，确认后该视频将取代之前置顶的内容。',
    },
    rollbackConfirm: {
        title: '确认撤回',
        content: '从主页撤回后，该内容可以正常访问，但不会在主页显示且不计算任何收益。',
    },
    forbideCommentConfirm: {
        title: '关闭评论',
        content: '关闭评论后，用户无法再对该文章评论，评论数和推荐量都会相应减少，请谨慎操作。',
    },
    openCommentConfirm: {
        title: '恢复评论',
        content: '恢复后，用户可以重新对该文章评论，历史评论不受影响。',
    },
    pubTimerArticleConfirm: {
        title: '提示',
        content: '立即发表这篇文章？',
    },
    withdrawArticleConfirm: {
        title: '删除确认',
        content: '删除的内容不可恢复。重复发表系统不再推荐，请谨慎删除。',
    },
};
const alertDisplayString = {
    politicsArticlesForbide: {
        title: '无法推荐',
        content: '国际，国内，军事，政务，财经，社会分类的文章无法推荐',
    },
    noneRecommendArticlesForbide: {
        title: '无法推荐',
        content: '该文章涉嫌敏感，或含有广告、低俗等信息，无法推荐',
    },
    deleteForbidden: {
        title: '暂时无法删除',
        content: '如果需要删除已发表的文章，请先将该文章从主页撤回。',
    },
    pushDeleteForbidden: {
        title: '暂时无法删除',
        content: '推送删除中，请勿重复操作！',
    },
};
class ConfirmDialog extends Component {
    constructor (props) {
        super(props);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.state={
            hide: true,
            contentKey: 'confirm', // alert
            dialogType: 'deleteConfirm',
            handleSure: this.close,
            handleClose: this.close,
        };
    }

  getContent () {
      const { contentKey, dialogType } = this.state;
      if (!contentKey) {
          return null;
      }
      let display;
      if (dialogType === 'confirm') {
          display = confirmDisplayString[contentKey];
      } else {
          display = alertDisplayString[contentKey];
      }
      return (
          <div className="content-body">
              <div>
                  <span className="alarm-icon" />
                  <span className="title">{display.title}</span>
              </div>
              <div className="content">{display.content}</div>
          </div>
      );
  }

  render () {
      const { handleClose, dialogType, handleSure, hide } = this.state;
      if(hide){
          return null;
      }
      if (dialogType === 'confirm') {
          return (
              <DialogCoo
                  title={this.getContent()}
                  showCloseIcon={false}
                  customClassName="confirm-dialog-coo"
                  closeCall={this.close}
                  btns={[
                      {
                          type: 'negative',
                          className: '',
                          text: '确定',
                          fn: (param)=>{
                              this.close("noTea");
                              handleSure(param);
                              },
                      },
                      {
                          type: 'default',
                          className: '',
                          text: '取消',
                          fn: this.close,
                      },
                  ]}
              />
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
          />
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
