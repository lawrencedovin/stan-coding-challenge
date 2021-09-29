import React from 'react';
import PropTypes from 'prop-types';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

const Series = () => (
  <div className={styles.Series} data-testid="Series">
    
    {Object.keys(data.entries).map((item, i) => (
      <ul>
        <li>{data.entries[item].title}</li>
      </ul>
    ))}

  </div>
);

Series.propTypes = {};

Series.defaultProps = {};

export default Series;
