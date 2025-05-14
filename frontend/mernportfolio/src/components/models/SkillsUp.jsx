import React, { useContext, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styled from 'styled-components';
import { Dataprovider } from '../Data';
import axios from 'axios';
Modal.setAppElement();
function SkillsUp() {
  const { updatingmodel, setupdatingmodel, passwordsuccess, setpasswordsuccess, maintost, setstateUpDb, apikey } = useContext(Dataprovider)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputsval, setinputsval] = useState({
    skill: "",
    percent: '',
  });

  function openModal() {
    setIsOpen(true);
    setpasswordsuccess(false)
  }
  function closeModal() {
    setupdatingmodel(false)
    setIsOpen(false);
  }



  useEffect(() => {
    if (updatingmodel === 'Skills' && passwordsuccess) {
      setIsOpen(true);
    }
  }, [passwordsuccess])




  const handlesubmit = () => {


    if (inputsval.percent && inputsval.skill) {

      axios.post(`${apikey}/skill`, { skill: inputsval.skill, percent: inputsval.percent }).then(response => {
        maintost("Skill page Added Successfully", "success");
        setstateUpDb(true)
      })
        .catch(error => {
          console.error(error);
          maintost("Some Error occurd in Database", "error");
        });

      closeModal()


    } else {
      maintost("All Fields are requires", 'error')
    }
  }




  if (updatingmodel == 'Skills' && passwordsuccess) {


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
          <h2 style={{ color: '#08d665', letterSpacing: '-1px', textAlign: 'left', margin: "0 0 15px 0" }}>Add Skills</h2>
          <NavigateForm  >


            <input type="text" placeholder='Skill' name="" id="" onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                skill: inp

              }))
            }}
              value={inputsval.skill} />
            <input type="number" placeholder='Percentage' name="" id="" onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                percent: inp

              }))
            }}
              value={inputsval.percent} />

            <div className="update-navi">
              <button onClick={() => {
                handlesubmit()
              }} >Submit</button>
              <button onClick={() => {
                closeModal()
              }} >Edit Skill</button>
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
  grid-template-columns:40%  60% ; 
  background-color: transparent;
  /* grid-template-columns: 1fr; */
  gap: .2rem;
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


export default SkillsUp

