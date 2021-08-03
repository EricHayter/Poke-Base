import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { store } from './misc/store'
import App from "./front-page/App"
import './index.css';
import reportWebVitals from './misc/reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
