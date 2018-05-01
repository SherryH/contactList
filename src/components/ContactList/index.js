/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { fetchContactsAsync, selectContact, searchContacts } from '../../actions';
import { getContacts } from '../../reducers';
import css from './ContactList.css';

type Props = {
  fetchContactsAsync: Function,
  selectContact: Function,
  searchContacts: Function,
  contacts: MapStr
};

class ContactList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchContactsAsync('http://jsonplaceholder.typicode.com/users');
  }
  onKeyDownHandler = (event: KeyboardEvent, id: number) => {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      this.clickHandler(id);
    }
  };
  clickHandler = (id: number) => {
    this.props.selectContact(id);
  };
  handleSearchChange = (event: Event) => {
    // send event.target.value action
    this.props.searchContacts(event.target.value);
  };

  render() {
    return (
      <div>
        <div className={css.listControl}>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search for Contact"
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="card">
          <div className="card-header">Contact List</div>
          <ul className="list-group list-group-flush">
            {this.props.contacts.map(({ id, name }) => (
              <li
                key={id}
                className="list-group-item"
                role="tab"
                tabIndex={0}
                onKeyDown={event => this.onKeyDownHandler(event, id)}
                onClick={() => this.clickHandler(id)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ contacts: getContacts(state) });

export default connect(mapStateToProps, { fetchContactsAsync, selectContact, searchContacts })(ContactList);
