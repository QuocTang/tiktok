import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
// import store from "./redux/store"
import store from "./test/store"

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Provider store={store}>

        <App/>
      </Provider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


