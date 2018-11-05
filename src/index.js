import React from 'react';
import {render} from 'react-dom';
import CompWrapper from './CooperateComponent';
import Toast from './Toast';
import Animation from './Animation';
const AnimateToast = Animation(Toast);
render(
    <CompWrapper toastA={AnimateToast} toast={Toast}/>,
    document.getElementById('app')
);