import React from 'react';
import styles from './Series.module.scss';
import data from "../../feed/sample.json";

function Series() {
  // let series = data.entries.map((item) => data.entries[item]).filter((item) => item.title === "Wolf Creek" ? item : "")
  return (
    <div className={styles.Series} data-testid="Series">
      <div class="container">
        <div class="row justify-content-md-center">
          {data.entries.map((item) => (
            item.title === "Wolf Creek" 
            ?
            <div className={styles.card}>
              <img class="card-img-top" src={item.images["Poster Art"].url} alt="Series Card" />
              <p>{item.title}</p>
            </div>
            :
            <div></div>
          ))}
          {/* {Object.keys(data.entries).map((item) => (
            <div className={styles.card}>
              <img class="card-img-top" src={data.entries[item].images["Poster Art"].url} alt="Series Card" />
              <p>{data.entries[item].title}</p>
            </div>
          )).filter((item) => data.entries[item].title === 'Wolf Creek')} */}
          {/* {Object.keys(data.entries).map((item) => (
            <div className={styles.card}>
              <img class="card-img-top" src={data.entries[item].images["Poster Art"].url} alt="Series Card" />
              <p>{data.entries[item].title}</p>
            </div>
          )).filter((item) => item)} */}
          {/* {data.entries.map((item) => (
            <p>{item.title === "Wolf Creek" ? item.title : ""}</p>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Series;
