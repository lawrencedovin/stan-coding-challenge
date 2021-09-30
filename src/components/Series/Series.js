import React, { useState, useEffect } from 'react';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

function Series() {

  const [state, setState] = useState(data);

  useEffect(() => {
    console.log('hello')
  }, [state])

  let series = []
  let seriesTitle = [];
  
  // Extracts item titles to array
  state.entries.map((item) => (
    item.releaseYear >= 2010 && item.programType === 'series'
    ?
    seriesTitle.push(item.title)
    :
    null
  ))

  // Sorts series titles and limits it to 21
  seriesTitle = seriesTitle.sort().slice(0, 21);

  // Loops through seriesTitle in order if the seriesTitle matches in json data then pushes it to series array.
  for(let i = 0; i < seriesTitle.length; i++) {
    state.entries.map((item) => (
      item.title === seriesTitle[i] ? series.push(item) : null
    ))
  }

  return (
      <>
      {
        state 
        ? 
        <div className={styles.Series} data-testid="Series">
            <div class="container">
              <div class="row justify-content-md-center">
                {series.map((item) => (
                  <div className={styles.card}>
                    <img class="card-img-top" src={item.images["Poster Art"].url} alt="Series Card" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        : 
        <p>Loading...</p>
      }
      </>
  )
}

export default Series;
