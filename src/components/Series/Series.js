import React from 'react';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

function Series() {
  let series = []
  data.entries.map((item) => (
    item.releaseYear >= 2010 && item.programType === 'series'
    ?
    series.push(item)
    :
    null
  ))
  return (
    <div className={styles.Series} data-testid="Series">
      <div class="container">
        <div class="row justify-content-md-center">
          {series.map((item, i) => (
            <div className={styles.card}>
              <img class="card-img-top" src={item.images["Poster Art"].url} alt="Series Card" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Series;
