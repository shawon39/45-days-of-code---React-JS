import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// import App2 from './hooksComponents/App2';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App2/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
