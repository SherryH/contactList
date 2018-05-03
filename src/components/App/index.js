/* @flow */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fontawesome from '@fortawesome/fontawesome';
import faSort from '@fortawesome/fontawesome-free-solid/faSort';
import faUp from '@fortawesome/fontawesome-free-solid/faLongArrowAltUp';
import faDown from '@fortawesome/fontawesome-free-solid/faLongArrowAltDown';
import LoadingBar from 'react-redux-loading-bar';
import ContactList from '../ContactList';
import css from './App.css';
import Heading from '../Heading';
import NameCard from '../NameCard';

fontawesome.library.add(faSort, faUp, faDown);

const App = () => [
  <LoadingBar key={0} loading={1} />,
  <Heading key={1} />,
  <div className={css.wrapper} key={2}>
    <ContactList />
    <NameCard />
  </div>
];

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
