import React from 'react';
import {render} from 'react-dom';
import {CompWrapper, PopAlertCoo} from '../src/index.js';
render(
    <CompWrapper PopAlertCoo={PopAlertCoo}/>,
    document.getElementById('app')
);
