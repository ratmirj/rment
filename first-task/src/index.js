import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(React.createElement(App, {name: 'World', location: "Here"}, null), document.getElementById('root'));
registerServiceWorker();
