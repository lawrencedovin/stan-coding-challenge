import React from 'react';
import PropTypes from 'prop-types';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

const Series = () => (
  <div className={styles.Series} data-testid="Series">
    <div class="container">
      <div class="row justify-content-md-center">
        {Object.keys(data.entries).map((item, i) => (
          <div className={styles.card}>
            <img class="card-img-top" src={data.entries[item].images["Poster Art"].url} alt="Series Card" />
            <div class="card-body">
              <h5 class="card-title">SERIES</h5>
              <p class="card-text">Check out some of our Series!</p>
            </div>
            <div class="card-body">
              <a href="/series" class="card-link">Check Series</a>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
);

Series.propTypes = {};

Series.defaultProps = {};

export default Series;
