import { store } from './store';

import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './components/Dashboard';


ReactDOM.render(
    <Dashboard/>, // 1: Actual component to render
    document.getElementById("app")// 2: Where it's being bootstrapped too
)