import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from './store';

ReactDOM.render(
<Provider store={store}>
  <SnackbarProvider anchorOrigin={{vertical:'bottom', horizontal:"center"}}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </SnackbarProvider>
  </Provider>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
