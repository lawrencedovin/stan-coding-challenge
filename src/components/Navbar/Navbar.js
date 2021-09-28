import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/series">Series</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/movies">Movies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
