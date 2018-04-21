import React from "react";
import { connect } from "react-redux";

class ContactList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          {this.props.contacts.map(contact => (
            <li className="list-group-item">{contact}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: state.map(contact => contact.name) };
};

export default connect(mapStateToProps)(ContactList);
