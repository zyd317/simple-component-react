import React from 'react';
import {render} from 'react-dom';
import CompWrapperTool from '../src/index.js';
const {Animation, CompWrapper, Toast} = CompWrapperTool;
const AnimateToast = Animation(Toast);
render(
    <CompWrapper toastA={AnimateToast} toast={Toast}/>,
    document.getElementById('app')
);
