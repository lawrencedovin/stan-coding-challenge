import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Header from '../Header/Header';
import placeholder from '../../assets/placeholder.png';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <Header/ >
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div className={styles.card}>
            <img class="card-img-top" src={placeholder} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">SERIES</h5>
              <p class="card-text">Check out some of our Series!</p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">Check Series</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className={styles.card}>
            <img class="card-img-top" src={placeholder} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">MOVIES</h5>
              <p class="card-text">Check out some of our Movies!</p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">Check Movies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
