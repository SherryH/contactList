/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { fetchContactsAsync, selectContact } from '../../actions';
import { getContacts } from '../../reducers';
import SearchInput from './SearchInput';
import SortIcon from './SortIcon';
import { CONTACT_PATH } from '../../constants';

type Props = {
  fetchContactsAsync: Function,
  selectContact: Function,
  contacts: MapStr
};

class ContactList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchContactsAsync(CONTACT_PATH);
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

  render() {
    return (
      <div>
        <SearchInput />
        <div className="card">
          <div className="card-header">
            Contact List <SortIcon />
          </div>
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

export default connect(mapStateToProps, { fetchContactsAsync, selectContact })(ContactList);
