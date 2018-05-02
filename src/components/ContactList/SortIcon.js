/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { sortContacts } from '../../actions';
import { getSortStatus } from '../../reducers';
import css from './ContactList.css';
import { ASC, DES } from '../../constants';

type Props = {
  sortContacts: Function,
  sortStatus: '' | ASC | DES
};

class SortIcon extends React.Component<Props> {
  handleSortClick = () => {
    this.props.sortContacts();
  };
  render() {
    return (
      <div>
        {this.props.sortStatus === ASC && <FontAwesomeIcon icon="long-arrow-alt-up" className={css.statusRight} />}
        {this.props.sortStatus === DES && <FontAwesomeIcon icon="long-arrow-alt-down" className={css.statusRight} />}
        <FontAwesomeIcon icon="sort" className={css.iconRight} onClick={this.handleSortClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ sortStatus: getSortStatus(state) });

export default connect(mapStateToProps, { sortContacts })(SortIcon);
