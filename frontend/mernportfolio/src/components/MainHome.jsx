import React, { useContext, useEffect, useState } from 'react'
import user from "../assets/image.png";
import axios from 'axios'
import { Dataprovider } from './Data';
function MainHome() {


  const [data, setdata] = useState(false)
  const [error, seterror] = useState(false)

  const { apikey, stateUpDb } = useContext(Dataprovider)
  let datafun = () => {

    axios.get(apikey + "/home").then((res) => {
      setdata(res.data)
      console.log(res.data)
    }).catch((err) => {
      seterror(err)
    })
  }

  // console.log(data)
  useEffect(() => { datafun() }, [stateUpDb])

  return (
    <header className="header-section">
      <div className="header-container">
        <div className="header-left">
          <div className="header-left-detail">
            <h4 dangerouslySetInnerHTML={{ __html: data?.findall?.[0]?.lineone }}>
            </h4>
            <h1 dangerouslySetInnerHTML={{ __html: data?.findall?.[0]?.name }} ></h1>
            <h3 dangerouslySetInnerHTML={{ __html: data?.findall?.[0]?.role }} ></h3>
            <p >
              {data?.findall?.[0]?.decription}
            </p>
          </div>
          <div className="social-icon">
            <li>
              <a href="https://www.linkedin.com/in/roshansharmaa/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/roshansharmaa" target="_blank"><i className="fa-brands fa-github"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/roshansharm.aa/" target="_blank"><i className="fa-brands fa-instagram"> </i></a>
            </li>
            <li>
              <a href="https://x.com/roshansharm_aa" target="_blank" download><i className="fa-brands fa-x-twitter"></i></a>
            </li>
          </div>
          <div className="om">
            <button className="btn">
              <a href={data?.findall?.[0]?.cvurl} target="_blank"> View CV </a>
            </button>
          </div>
        </div>
        <div className="header-right">
          {/* <img src={user} alt="" /> */}
          <img src={data?.findall?.[0]?.profileurl} alt="" />
        </div>
      </div>
    </header>
  )
}

export default MainHome