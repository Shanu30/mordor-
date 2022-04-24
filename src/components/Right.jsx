import React from "react";
import styles from "./css/right.module.css";
import image from './pngtime.png';

export default function Right({ browser, country, data, text, browserdata, b1, b2 }) {
  return (
    <div className={styles.right}>
      {browser ? (
        <div className={styles.browser}>
          <div className={styles.head}>Browser</div>
          {b1? data?.map((item) => {
            return <div className={styles.item} key={item.id}>{item.browser}</div>
          }): data?.filter(item=>item.browser===browserdata).map((item) => {
            return <div className={styles.item} key={item.id}>{item.browser}</div>
          })}
         
        </div>
      ) : (
        ""
      )}
      {country ? (
        <div className={styles.country}>
          <div className={styles.head}>Country</div>
          {b2? data?.map((item) => {
            return <div className={styles.item} key={item.id}>{item.country}</div>;
          }):data?.filter(item=>item.country===text).map((item) => {
            return <div className={styles.item} key={item.id}>{item.country}</div>;
          })}
        </div>
      ) : (
        ""
      )}
      <div className={styles.date}>
        <div className={styles.head}></div>
        {browser?(<div>{data.map((item) => {
          return <div className={styles.item} key={item.id}><img className={styles.graph} src={image} alt="statics"/></div>;
        })}</div>):(<div className={styles.item}><img className={styles.graph} src={image} alt="statics"/></div>)};
      </div>
    </div>
  );
}
