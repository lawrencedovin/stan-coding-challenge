import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movies.module.scss';

const Movies = () => (
  <div className={styles.Movies} data-testid="Movies">
    Movies Component
  </div>
);

Movies.propTypes = {};

Movies.defaultProps = {};

export default Movies;
