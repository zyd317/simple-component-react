/**
 * @author yidi.zhao
 */
import React from 'react';
import Dialog from '../Dialog';
import './style.scss';
export default function PopAlert(props: any) {
    const {status, content} = props;

    return (
        <Dialog
            title=""
            showCloseIcon={false}
            buttons={[]}
            customClassName="__pop_alert_coo"
            close={props.hide}
        >
            <div className={`dialog-status ${status}`}>{content}</div>
        </Dialog>
    );
}