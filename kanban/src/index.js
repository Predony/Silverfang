import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Provider from './components/Provider';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();
