import React, { useContext, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styled from 'styled-components';
import { Dataprovider } from '../Data';
import axios from 'axios';
Modal.setAppElement();
function Varifymodel() {
  const { updatingmodel, setupdatingmodel, apikey, passwordsuccess, setpasswordsuccess, maintost } = useContext(Dataprovider);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inpval, setinpval] = useState('');



  const [data, setdata] = useState(false)
  const [error, seterror] = useState(false)

  let datafun = () => {


    axios.get(apikey + "/verify").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      seterror(err)
    })
  }

  useEffect(() => { datafun() }, [])





  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const hanldlesubmit = () => {
    if (data == false) {
      maintost('Trry after some time', 'error')
      return
    }
    if (data?.pass == inpval) {
      setpasswordsuccess(true)
      setinpval('')
      maintost('Verification Success', 'success')

    } else {
      maintost('Pasword dos not match', 'error')

    }
  }


  useEffect(() => {
    updatingmodel ? setIsOpen(true) : ''
  }, [updatingmodel])

  return (
    <div>
      {/* <button >Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: '#08d665', letterSpacing: '-1px', margin: "0 0 15px 0" }}>Admin Password</h2>
        <NavigateForm  >
          <input type="text" onChange={(e) => { setinpval(e.target.value) }} placeholder='Enter Admin Password' name="" id="" />
          <div className="update-navi">
            <button onClick={() => {
              closeModal(), hanldlesubmit()
            }} >Submit</button>
          </div>
        </NavigateForm>
      </Modal>

    </div >
  );
}

const NavigateForm = styled.div`
display:grid;
grid-template-columns: 1fr;
  gap: 1rem;
  justify-content: center;
  input{
    /* width: 100%; */
    margin: 0 auto;
    padding: .4rem .6rem;
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


export default Varifymodel

