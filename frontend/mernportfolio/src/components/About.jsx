import React, { useContext, useEffect, useState } from 'react'

import about from "../assets/image copy.png";
import { Dataprovider } from './Data';
import axios from 'axios';

function About() {


  const [data, setdata] = useState(false)
  const [error, seterror] = useState(false)

  const { apikey, stateUpDb } = useContext(Dataprovider)
  let datafun = () => {


    axios.get(apikey + "/about").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      seterror(err)
    })
  }

  useEffect(() => { datafun() }, [stateUpDb])

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <img src={about} alt="" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p dangerouslySetInnerHTML={{ __html: data?.findall?.[0]?.about }}>



          </p>
          <div className="list">
            <h1>Education Detail</h1>
            <ul className="study-details">
              <li>
                <h3>2020</h3>
                <h3>10<sup>th</sup></h3>
                <h3>83%</h3>
              </li>
              <li>
                <h3>2022</h3>
                <h3>12<sup>th</sup></h3>
                <h3>52%</h3>
              </li>
              <li>
                <h3>2025</h3>
                <h3>BscIT</h3>
                <h3>8 CGPA</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About