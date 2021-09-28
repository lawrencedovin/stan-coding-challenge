import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Header from '../Header/Header';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <Header/ >
    Home Component
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
