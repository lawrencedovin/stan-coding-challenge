import React, { useCallback, useState, useEffect } from 'react';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Series() {

  const [isLoaded, setIsLoaded] = useState(false);

  const fetchJSONDataFrom = useCallback(async (path) => {
  
    await fetch(path, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    fetchJSONDataFrom("../../feed/sample.json");
  }, [fetchJSONDataFrom]);

  let series = []
  let seriesTitle = [];
  
  // Extracts item titles to array
  data.entries.map((item) => (
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
    data.entries.map((item) => (
      item.title === seriesTitle[i] ? series.push(item) : null
    ))
  }

  const override = css`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
  `;

  return (
      <>
      {
        isLoaded 
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
        <PacmanLoader color={"#FEE638"} css={override} size={50}/>
      }
      </>
  )
}

export default Series;
