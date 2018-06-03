/* @flow */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import faSort from '@fortawesome/fontawesome-free-solid/faSort';
import faUp from '@fortawesome/fontawesome-free-solid/faLongArrowAltUp';
import faDown from '@fortawesome/fontawesome-free-solid/faLongArrowAltDown';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Heading from '../Heading';
import NavBar from '../NavBar';
import Report from '../Report';
import Home from '../Home';

fontawesome.library.add(faSort, faUp, faDown);

const App = () => (
  <Router>
    <div>
      <LoadingBar loading={1} />
      <NavBar />
      <Heading />
      <Route exact path="/" component={Home} />
      <Route path="/report" component={Report} />
    </div>
  </Router>
);

export default App;
