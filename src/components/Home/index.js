import React from 'react';
import ContactList from '../ContactList';
import NameCard from '../NameCard';
import css from './Home.css';

const Home = () => (
  <div className={css.wrapper}>
    <ContactList />
    <NameCard />
  </div>
);

export default Home;
