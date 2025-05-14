import React, { useContext, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios'
import styled from 'styled-components';
import { Dataprovider } from '../Data';
import ToastCont from '../ToastCont';
Modal.setAppElement();
function HomeUp() {
  const { updatingmodel, passwordsuccess, setpasswordsuccess, apikey, setupdatingmodel, maintost, setstateUpDb } = useContext(Dataprovider)


  const [data, setdata] = useState(false)
  const [error, seterror] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputsval, setinputsval] = useState({
    lineone: data?.findall?.[0]?.lineone,
    name: data?.findall?.[0]?.name,
    role: data?.findall?.[0]?.role,
    profileurl: data?.findall?.[0]?.profileurl,
    decription: data?.findall?.[0]?.decription,
    cvurl: data?.findall?.[0]?.cvurl
  });




  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setupdatingmodel(false)
    setpasswordsuccess(false)
    setIsOpen(false);
  }
  useEffect(() => {
    if (updatingmodel === 'Home' && passwordsuccess) {
      setIsOpen(true);
    }
  }, [passwordsuccess])


  let datafun = () => {

    axios.get(apikey + "/home").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      seterror(err)
    })
  }


  const handlesubmit = () => {


    // if (inputsval.lineone && inputsval.name && inputsval.decription && inputsval.profileurl && inputsval.role && inputsval.cvurl) {

    axios.put(`${apikey}/home`, { lineone: inputsval.lineone, name: inputsval.name, role: inputsval.role, profileurl: inputsval.profileurl, decription: inputsval.decription, cvurl: inputsval.cvurl }).then(response => {
      maintost("Home page update Successfully", "success");
      setstateUpDb(true)
    })
      .catch(error => {
        console.error(error);
        maintost("Some Error occurd in Database", "error");
      });

    closeModal()



  }


  useEffect(() => {
    datafun()
  }, [inputsval])


  if (updatingmodel == 'Home' && passwordsuccess) {
    return (
      <>
        {/* <h1>Lorem ipsum dolor sit amet.</h1> */}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <h2 style={{ color: '#08d665', letterSpacing: '-1px', textAlign: 'left', margin: "0 0 15px 0" }}>Update Home</h2>
          <NavigateForm  >
            <input type="text" placeholder='Hello, Its Me...' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                lineone: inp

              }))
            }}
              value={inputsval.lineone}
            />
            <input type="text" placeholder='Roshan Sharma' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                name: inp

              }))
            }}
              value={inputsval.name}
            />
            <input type="text" placeholder='And I am a MERN stack developer' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                role: inp

              }))
            }}
              value={inputsval.role}
            />
            <input type="text" placeholder='Profile Url' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                profileurl: inp

              }))
            }}
              value={inputsval.profileurl}
            />
            <input type="text" placeholder='CV Url' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                cvurl: inp

              }))
            }}
              value={inputsval.cvurl}
            />
            <textarea rows={3} type="text" placeholder='Highly Motivated and enthusiastic recent graduate seeking to ' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                decription: inp

              }))
            }}
              value={inputsval.decription}
            />

            <div className="update-navi">
              <button onClick={() => {
                handlesubmit()
              }} >Submit</button>
            </div>
          </NavigateForm>
        </Modal>

      </ >
    )
  }
  else {
    return (
      <>
      </>
    )

  }
}

const NavigateForm = styled.div`
display:flex;
flex-direction: column;
  gap: 1rem;
  justify-content: center;
padding: .5rem;
  input,textarea{
    width:90%;
    margin: 0 auto;
    padding: .4rem .6rem;
    border-radius: 0;
    background-color: transparent;
    outline: none;
    border: 2px dotted #08d665;
  }

  .update-navi{
  
  display:grid;
  background-color: transparent;
  grid-template-columns: 1fr;
  gap: .5rem;
  button{
    /* min-width: 80px; */
    width: 90%;
    margin: 0 auto;
    padding: .3rem .5rem;
    background-color: #08d665;
    border: 2px dotted white;
    font-weight: 700;
    letter-spacing: 1px;

  }
}
  @media screen and (max-width:768px) {

    .update-navi{
    margin: 0 0;

  }
  }
`


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0)',
    backgroundColor: 'rgba(0 ,0,0)',



  },
  overlay: {
    backgroundColor: 'rgba(29, 26, 26, 0.6)',
  },
};


export default HomeUp

