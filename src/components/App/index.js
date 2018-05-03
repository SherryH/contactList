/* @flow */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fontawesome from '@fortawesome/fontawesome';
import faSort from '@fortawesome/fontawesome-free-solid/faSort';
import faUp from '@fortawesome/fontawesome-free-solid/faLongArrowAltUp';
import faDown from '@fortawesome/fontawesome-free-solid/faLongArrowAltDown';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactList from '../ContactList';
import css from './App.css';
import Heading from '../Heading';
import NameCard from '../NameCard';
import NavBar from '../NavBar';

fontawesome.library.add(faSort, faUp, faDown);

const Home = () => (
  <div className={css.wrapper}>
    <ContactList />
    <NameCard />
  </div>
);

const Report = () => <div>Hello</div>;

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

// class App extends React.Component {
//   render() {
//     return [
//       <Heading key={0} />,
//       <div className="wrapper" key={1}>
//         <ContactList />
//         <NameCard />
//       </div>
//     ];
//   }
// }

export default App;
