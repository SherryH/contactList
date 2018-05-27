/* @flow */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { fetchContactsAsync } from '../actions';
import { getAllContacts } from '../reducers';
// import { CONTACT_PATH } from '../constants';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const data = {
  labels: alphabetArray,
  datasets: [
    {
      label: 'Counts',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
};

type Props = {
  contacts: MapStr,
  fetchContactsAsync: Function
};

class Report extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.props.contacts.length === 0) {
      this.props.fetchContactsAsync();
    }
  }
  getContactCountArray = () => {
    const contactAlphabetCount = {};
    alphabetArray.forEach((alphabet) => {
      contactAlphabetCount[alphabet] = 0;
    });
    this.props.contacts.forEach((contact) => {
      contactAlphabetCount[contact.name[0]] += 1;
    });
    return Object.values(contactAlphabetCount);
  };

  render() {
    data.datasets[0].data = this.getContactCountArray();
    return (
      <div style={{ padding: '1em' }}>
        <h2>No. contacts that start with each letter of alphabet</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getAllContacts(state)
});

export default connect(mapStateToProps, { fetchContactsAsync })(Report);
