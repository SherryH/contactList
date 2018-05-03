/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import css from './NameCard.css';
import { getSelectedContact } from '../../reducers';

type Props = {
  selectedContact: Contact
};

const NameCard = ({ selectedContact }: Props) => {
  const {
    name, phone, email, website, company
  } = selectedContact || {
    name: '', phone: '', email: '', website: ''
  };
  const { name: companyName, bs } = company || { name: '', bs: '' };
  if (!name) return null;
  return (
    <div className={css.wrapper}>
      <div className={css.nameCard}>
        <div className={css.contactTitle}>
          <div className={css.name}>{name}</div>
          <div className={css.title}>{companyName}</div>
        </div>
        <div className={css.divider} />
        <div className={css.contactDetails}>
          <div className={css.description}>{bs}</div>
          <div className={css.contactMethods}>
            <div className={css.phone}>
              <strong>Phone:</strong> {phone}
            </div>
            <div className={css.email}>
              <strong>Email:</strong> {email}
            </div>
            <div className={css.url}>
              <strong>URL:</strong> {website}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ selectedContact: getSelectedContact(state) });

export default connect(mapStateToProps)(NameCard);
