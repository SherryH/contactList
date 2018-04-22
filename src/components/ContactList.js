import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Featured</div>
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

export default connect(mapStateToProps, { fetchContacts })(ContactList);
