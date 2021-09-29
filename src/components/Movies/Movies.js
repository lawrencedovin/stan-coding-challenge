import React from 'react';
import styles from './Movies.module.scss';
import data from "../../feed/sample.json";

function Movies() {
  let series = []
  let seriesTitle = [];
  
  // Extracts item titles to array
  data.entries.map((item) => (
    item.releaseYear >= 2010 && item.programType === 'movie'
    ?
    seriesTitle.push(item.title)
    :
    null
  ))

  // Sorts series titles and limits it to 21
  seriesTitle = seriesTitle.sort().slice(0, 21);

  // Loops through seriesTitle in order if the seriesTitle matches in json data then pushes it to series array.
  for(let i = 0; i < seriesTitle.length; i++) {
    data.entries.map((item) => (
      item.title === seriesTitle[i] ? series.push(item) : null
    ))
  }

  return (
    <div className={styles.Movies} data-testid="Movies">
      <div class="container">
        <div class="row justify-content-md-center">
          {series.map((item, i) => (
            <div className={styles.card}>
              <img class="card-img-top" src={item.images["Poster Art"].url} alt="Movies Card" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies;
