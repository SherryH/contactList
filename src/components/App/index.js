/* @flow */

import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { Route } from 'react-router-dom';
import Heading from '../Heading';
import NavBar from '../NavBar';
import Report from '../Report';
import Home from '../Home';

const App = () => (
  <React.Fragment>
    <LoadingBar loading={1} />
    <NavBar />
    <Heading />
    <Route exact path="/" component={Home} />
    <Route path="/report" component={Report} />
  </React.Fragment>
);

export default App;
