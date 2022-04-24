import React from "react";
import styles from "./css/nav.module.css";
import { useState,useEffect } from "react";
import Nav from "./Nav";
import Left from './Left';
import Right from './Right';
import styles1 from './css/display.module.css'


export default function Dropdown() {
   const [browser, setBrowser] = useState(true);
   const [country, setCountry] = useState(true);
    const [data, setData] = useState([]);
    const [changedata, setChangedata] = useState("");
    const [browserdata, setBrowserdata] = useState("");
    const [boolean1, setBoolean1] = useState(true);
    const [boolean2, setBoolean2] = useState(true);
    // console.log(data.filter(item=>item.country===changedata))

    const getData = async() => {
        const res = await fetch("http://localhost:3000/data");
        const data = await res.json();
        setData(data)
    }

    useEffect(() => {
        getData()
        }
    ,[])

  const handleA = () => {
    setBrowser(true);
    setCountry(true);
  };
  const handleB = () => {
    setBrowser(false);
    setCountry(false);
  };
  const handleC = () => {
    setCountry(false);
    setBrowser(true);
  };
  const changebrowserdata = (text) => {
    setBrowserdata(text)
    setBoolean1(false)
  }
  const change = (text) => {
    setChangedata(text)
    setBoolean2(false)
  }
//   console.log(changedata)

  return (
    <>
      <div className={styles.dropdown}>
        <div className="dropdown">
          <a
            className="btn dropdown-toggle"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Breakdown: Browser,Country,Date
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleC}
              >
                Breakdown: Browser,Date
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleA}
              >
                Breakdown: Browser,Country,Date
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleB}
              >
                Breakdown: Date
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Nav />
      <div className={styles1.display}>
        <Left checkbox = {change} changebrowser = {changebrowserdata}/>
        <Right browser={browser} country={country} data={data} text={changedata} browserdata={browserdata} b1={boolean1} b2 = {boolean2}/>
    </div>
    </>
  );
}
