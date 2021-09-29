import React from 'react';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

function Series() {
  let series = []
  let seriesTitle = [];
  data.entries.map((item) => (
    item.releaseYear >= 2010 && item.programType === 'series'
    ?
    // series.push(item)
    seriesTitle.push(item.title)
    :
    null
  ))
  seriesTitle = seriesTitle.sort().slice(0, 21);
  data.entries.map((item) => (
    seriesTitle.includes(item.title)
    ?
    series.push(item)
    :
    null 
  ))
  // Extract
  // Order by item.title in series
  return (
    <div className={styles.Series} data-testid="Series">
      <div class="container">
        <div class="row justify-content-md-center">
          {series.slice(0, 21).map((item, i) => (
            <div className={styles.card}>
              <img class="card-img-top" src={item.images["Poster Art"].url} alt="Series Card" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        {/* <div>{seriesTitle.map((title) => title)}</div> */}
      </div>
    </div>
  )
}

export default Series;
