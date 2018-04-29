/* @flow */

import React from 'react';
import css from './NameCard.css';

const NameCard = () => (
  <div className={css.wrapper}>
    <div className={css.nameCard}>
      <div className={css.contactTitle}>
        <div className={css.name}>John Smith</div>
        <div className={css.title}>Solution Engineer</div>
      </div>
      <div className={css.divider} />
      <div className={css.contactDetails}>
        <div className={css.description}>Transition Cutting-Edge Web</div>
        <div className={css.contactMethods}>
          <div className={css.phone}>
            <strong>Phone:</strong> 493.170.9623
          </div>
          <div className={css.email}>
            <strong>Email:</strong> nathan@yesenia.net
          </div>
          <div className={css.url}>
            <strong>URL:</strong> ramiro.info
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NameCard;
