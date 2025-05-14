import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Dataprovider } from './Data'
function Skills() {


  const [data, setdata] = useState(false)
  const [error, seterror] = useState(false)

  const { apikey, stateUpDb } = useContext(Dataprovider)
  let datafun = () => {


    axios.get(apikey + "/skill").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      seterror(err)
    })
  }

  useEffect(() => { datafun() }, [stateUpDb])

  return (
    <section className="skill" id="skill">
      <div className="skill-container">
        <h2>Skills</h2>
        <div className="skill-menu">

          {
            data?.findall?.map((e, i) => (


              <div className="skill-item" key={i} >
                <p>{e.skill}</p>
                <div className="container">
                  <div className="skills " style={{ background: '#08d665', width: `${e.percent}%` }}>{e.percent
                  }%</div>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Skills