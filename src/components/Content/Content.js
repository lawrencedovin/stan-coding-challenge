import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

const Content = () => (
  <div className={styles.Content} data-testid="Content">
    Content Component
  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
