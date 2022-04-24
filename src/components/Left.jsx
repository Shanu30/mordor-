import React from "react";
import styles2 from "./css/left.module.css";

export default function Left({ checkbox, changebrowser }) {
  const handleClick = (val) => {
    checkbox(val);
  };
  const handleBrowser = (val) => {
    changebrowser(val)
  }
  return (
    <div className={styles2.left}>
      <div className={styles2.inpt}>
        <input type="search" placeholder="Search" />
      </div>
      <hr />
      <div>
        <div>
          <b>Browser</b>
        </div>
        <div className="form-check">
          <button className={styles2.btn} onClick={() => handleBrowser("Chrome")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              Chrome
           
          </button>
        </div>
        <div className="form-check">
          <button className={styles2.btn} onClick={() => handleBrowser("Safari")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              Safari
    
          </button>
        </div>
        <div className="form-check">
          <button className={styles2.btn} onClick={() => handleBrowser("Firefox")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              FireFox
        
          </button>
        </div>
        <div className="form-check">
          <button className={styles2.btn} onClick={() => handleBrowser("Edge")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              Edge
           
          </button>
        </div>

        <hr />

        <div>
          <b>Country</b>
        </div>
        <div class="form-check">
          <button className={styles2.btn} onClick={() => handleClick("United States")}>
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">United States</label>
          </button>
        </div>
        <div class="form-check">
          <button className={styles2.btn} onClick={() => handleClick("United Kingdom")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              United Kingdom
           
          </button>
        </div>
        <div class="form-check">
          <button className={styles2.btn} onClick={() => handleClick("India")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              India
            
          </button>
        </div>
        <div class="form-check">
          <button className={styles2.btn} onClick={() => handleClick("France")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              France
           
          </button>
        </div>
        <div class="form-check">
          <button className={styles2.btn} onClick={() => handleClick("Germany")}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
              Germany

          </button>
        </div>

        <hr />

        <div>
          <b>Date</b>
        </div>
      </div>
    </div>
  );
}
