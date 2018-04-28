/* @flow */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ContactList from '../ContactList';
import css from './App.css';
import Heading from '../Heading';
import NameCard from '../NameCard';

const App = () => [
  <Heading key={0} />,
  <div className={css.wrapper} key={1}>
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
