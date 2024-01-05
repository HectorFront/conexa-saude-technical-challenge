/** @name Layout */
import 'layout/fonts/index.css';
import 'layout/normalize/index.css';
import 'layout/scrollbar/index.css';

import 'layout/vars/colors/index.css';
import 'layout/vars/zIndex/index.css';
/** @name Plugins */
import 'assets/plugins/boostrap';
import 'assets/plugins/material-icons';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes} from './routes';
import {UserProvider} from "./context/user";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <UserProvider>
        <Routes/>
    </UserProvider>
);