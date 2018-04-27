/* @flow */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ContactList from './ContactList';
import './App.css';
import './Heading';

const NameCard = () => (
  <div className="cardWrapper">
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
);

const App = () => [
  <Heading key={0} />,
  <div className="wrapper" key={1}>
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
