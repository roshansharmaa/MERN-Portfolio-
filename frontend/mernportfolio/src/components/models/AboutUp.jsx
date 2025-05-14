import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styled from 'styled-components';
import { Dataprovider } from '../Data';
Modal.setAppElement();
function AboutUp() {
  const { updatingmodel, setupdatingmodel, setpasswordsuccess, passwordsuccess, apikey, maintost, setstateUpDb } = useContext(Dataprovider)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setupdatingmodel(false)
    setpasswordsuccess(false)

    setIsOpen(false);
  }



  const [inputsval, setinputsval] = useState('');



  const handlesubmit = () => {

    if (inputsval) {

      axios.put(`${apikey}/about`, { about: inputsval }).then(response => {
        console.log(response.data);
        maintost("About page update Successfully", "success");
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



  useEffect(() => {
    console.log(updatingmodel == 'About' && passwordsuccess)
    if (updatingmodel === 'About' && passwordsuccess) {
      setIsOpen(true);
    }
  }, [passwordsuccess])


  console.log(updatingmodel, 'About')

  if (updatingmodel == 'About' && passwordsuccess) {


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
          <h2 style={{ color: '#08d665', letterSpacing: '-1px', textAlign: 'left', margin: "0 0 15px 0" }}>Update About</h2>
          <NavigateForm  >

            <textarea rows={10} onChange={(e) => { setinputsval(e.target.value) }} type="text" placeholder='Highly Motivated and enthusiastic recent graduate seeking to ' />

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


export default AboutUp

