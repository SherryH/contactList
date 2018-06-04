/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { searchContacts } from '../../actions';
import css from './ContactList.css';

type Props = {
  searchContacts: Function
};

class SearchInput extends React.PureComponent<Props> {
  state = {
    searchText: ''
  };
  handleSearchChange = (event: Event) => {
    this.setState({ searchText: event.target.value }, () => {
      this.props.searchContacts(this.state.searchText);
    });
  };
  render() {
    return (
      <div className={css.listControl}>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search for Contact"
          onChange={this.handleSearchChange}
          value={this.state.searchText}
        />
      </div>
    );
  }
}

export default connect(null, { searchContacts })(SearchInput);
