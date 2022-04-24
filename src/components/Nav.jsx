import React from "react";
import styles from "./css/nav.module.css";

export default function Nav() {
  return (  
    //dropdown
    
    //nav
    <div className={styles.nav}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto mb-2 mb-lg-0">
              <input
                className="form-control me-2"
                type="Date"
                placeholder="Search"
                aria-label="Search"
              />
              <button className= {styles.navbtn} type="submit">
                Compare
              </button>
            </form>

            <ul className="navbar-nav ">
                <div className={styles.p}>Group By:</div>
              <div className={styles.navdropdown}>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                </li>
              </div>

              <div className={styles.navdropdown}>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stacked Bar
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}
