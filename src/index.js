import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomeRoutes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomeRoutes />, document.getElementById('root'));
registerServiceWorker();
