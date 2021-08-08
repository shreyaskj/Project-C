import React from 'react';
import ReactDOM from 'react-dom';

import './calci.css';
import NumberUpdater from './calci';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NumberUpdater/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
//thanks for sharing the repo
