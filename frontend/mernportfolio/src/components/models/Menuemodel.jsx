import React, { useContext, useState } from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styled from 'styled-components';
import { Dataprovider } from '../Data';
Modal.setAppElement();
function Menuemodel() {
  const { updatingmodel, setupdatingmodel, setstateUpDb } = useContext(Dataprovider);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    setstateUpDb(false)

  }
  function closeModal() {
    setIsOpen(false);
  }

  let buttonsarr = ['Home', 'About', 'Skills', 'Projecs']
  // console.log(updatingmodel)
  return (
    <div>
      <div className="admin" onClick={openModal}><a href="#admin">Admin</a></div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: '#08d665', letterSpacing: '-1px', margin: "0 0 15px 0" }}>What You Want to Update ??</h2>
        <NavigateForm  >
          {
            buttonsarr.map((e) =>
            (<button className='update-navi' onClick={() => {
              closeModal(), setupdatingmodel(e)

            }} key={e} style={{ padding: '.5rem', border: '2px dotted white', background: '#08d665', minWidth: '150px', }}>{e}</button>)
            )
          }
        </NavigateForm>
        <button className='update-pass' onClick={() => {
          closeModal(), setupdatingmodel("Password")

        }} style={{ padding: '.5rem', marginTop: '1rem', border: '2px dotted white', background: '#08d665', width: '100%', }}>Password</button>
      </Modal>

    </div >
  );
}

const NavigateForm = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;


  .update-navi{
    margin: 0 auto;
    padding: 2rem;

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


export default Menuemodel

