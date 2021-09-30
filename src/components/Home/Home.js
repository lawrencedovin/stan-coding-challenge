import React from 'react';
import styles from './Home.module.scss';
import placeholder from '../../assets/placeholder.png';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <div class="container">
      <div class="row justify-content-md-center">
        <div className={styles.card}>
          <img class="card-img-top" src={placeholder} alt="Series Card" />
          <div class="card-body">
            <h5 class="card-title">SERIES</h5>
            <p class="card-text">Check out some of our Series!</p>
          </div>
          <div class="card-body">
            <a href="/series" class="card-link">Check Series</a>
          </div>
        </div>
        <div className={styles.card}>
          <img class="card-img-top" src={placeholder} alt="Movies Card" />
          <div class="card-body">
            <h5 class="card-title">MOVIES</h5>
            <p class="card-text">Check out some of our Movies!</p>
          </div>
          <div class="card-body">
            <a href="/movies" class="card-link">Check Movies</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
