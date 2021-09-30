import React, { useCallback, useState, useEffect } from 'react';
import styles from './Movies.module.scss';
import data from "../../feed/sample.json";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Movies() {

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

  let movies = []
  let moviesTitle = [];
  
  // Extracts item titles to array
  data.entries.map((item) => (
    item.releaseYear >= 2010 && item.programType === 'movie'
    ?
    moviesTitle.push(item.title)
    :
    null
  ))

  // Sorts series titles and limits it to 21
  moviesTitle = moviesTitle.sort().slice(0, 21);

  // Loops through moviesTitle in order if the moviesTitle matches in json data then pushes it to series array.
  for(let i = 0; i < moviesTitle.length; i++) {
    data.entries.map((item) => (
      item.title === moviesTitle[i] ? movies.push(item) : null
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
        <div className={styles.Movies} data-testid="Movies">
            <div class="container">
              <div class="row justify-content-md-center">
                {movies.map((item) => (
                  <div className={styles.card}>
                    <img class="card-img-top" src={item.images["Poster Art"].url} alt="Movies Card" />
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

export default Movies;
