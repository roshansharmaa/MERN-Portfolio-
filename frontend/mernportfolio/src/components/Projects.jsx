import React, { useContext, useEffect, useState } from 'react'

import { Dataprovider } from './Data';
import axios from 'axios';

function Projects() {



  const [data, setdata] = useState(false)

  const [error, seterror] = useState(false)

  const { apikey, stateUpDb } = useContext(Dataprovider)
  let datafun = () => {


    axios.get(apikey + "/projects").then((res) => {
      setdata(res.data)
      console.log(res.data.findall)
    }).catch((err) => {
      seterror(err)
    })
  }

  // console.log(data)
  useEffect(() => { datafun() }, [stateUpDb])

  return (
    <section className="project" id="project">
      <div className="project-container">
        <h2>Projects</h2>
        <ul className="project-menu">
          {

            data?.findall?.map((e, i) => (

              <li className="project-item" key={i} >
                <img src={e.imageurl} alt="" />
                <h3>{e.prjname
                }</h3>
                <p>
                  {e.prjdec
                  }
                </p>
                <div className="buttns">
                  <a href={e.liveurl} target="_blank">
                    <button className="btn"><i className="fa-solid fa-link"></i></button>
                  </a>
                  <a
                    href={e.giturl}
                    target="_blank"
                  >
                    <button className="btn"><i className="fa-brands fa-github"></i></button>
                  </a>
                </div>
              </li>
            ))

          }
        </ul>
      </div>
    </section>
  )
}

export default Projects