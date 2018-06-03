import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import faSort from '@fortawesome/fontawesome-free-solid/faSort';
import faUp from '@fortawesome/fontawesome-free-solid/faLongArrowAltUp';
import faDown from '@fortawesome/fontawesome-free-solid/faLongArrowAltDown';
import App from './components/App/index';
import configureStore from './configureStore';

fontawesome.library.add(faSort, faUp, faDown);

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
