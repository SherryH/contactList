import React from "react";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const Heading = () => (
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Contact List </h1>
      <p class="lead">
        This is a contact list that offers search and view details capability
      </p>
    </div>
  </div>
);

const NameCard = () => (
  <div class="card">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

class App extends React.Component {
  render() {
    return [
      <Heading />,
      <div className="wrapper">
        <ContactList />
        <NameCard />
      </div>
    ];
  }
}

export default App;
