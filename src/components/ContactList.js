import React from "react";
import { connect } from "react-redux";
import { fetchContactsAsync } from "../actions";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContactsAsync("http://jsonplaceholder.typicode.com/users");
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Contact List</div>
        <ul className="list-group list-group-flush">
          {this.props.contacts.map(contact => (
            <li className="list-group-item" key={contact.id}>
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: state.map(contact => contact) };
};

export default connect(mapStateToProps, { fetchContactsAsync })(ContactList);
