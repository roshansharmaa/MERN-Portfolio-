import React, { useContext, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios'
import styled from 'styled-components';
import { Dataprovider } from '../Data';
Modal.setAppElement();
function ProjectUp() {
  const { updatingmodel, passwordsuccess, verifypass, setpasswordsuccess, setupdatingmodel, apikey, maintost, setstateUpDb } = useContext(Dataprovider)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputsval, setinputsval] = useState({
    pjimg: '', pjname: '', giturl: '', liveurl: '', pjdec: ''
  });


  const handlesubmit = () => {


    if (inputsval.pjimg && inputsval.pjname && inputsval.pjdec && inputsval.liveurl && inputsval.giturl) {

      axios.post(`${apikey}/projects`, { imageurl: inputsval.pjimg, prjname: inputsval.pjname, prjdec: inputsval.pjdec, liveurl: inputsval.liveurl, giturl: inputsval.giturl }).then(response => {
        console.log(response.data);
        maintost("Project Added Successfully", "success");
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




  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setupdatingmodel(false)
    setpasswordsuccess(false)
    setIsOpen(false);
  }



  useEffect(() => {
    console.log(updatingmodel == 'Projecs' && passwordsuccess)
    if (updatingmodel === 'Projecs' && passwordsuccess) {
      setIsOpen(true);
    }
  }, [passwordsuccess])



  if (updatingmodel == 'Projecs' && passwordsuccess) {


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
          <h2 style={{ color: '#08d665', letterSpacing: '-1px', textAlign: 'left', margin: "0 0 15px 0" }}>Add Projecs</h2>
          <NavigateForm  >
            <input type="text" placeholder='Image Url' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                pjimg: inp

              }))
            }}
              value={inputsval.pjimg} />
            <input type="text" placeholder='Project Name'
              onChange={(e) => {
                let inp = e.target.value
                setinputsval((prev) => ({
                  ...prev,
                  pjname: inp

                }))
              }}
              value={inputsval.pjname} />
            <textarea rows={3} type="text" placeholder='Decreption ' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                pjdec: inp

              }))
            }}
              value={inputsval.pjdec} />
            <input type="text" placeholder='Live url' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                liveurl: inp

              }))
            }}
              value={inputsval.liveurl} />
            <input type="text" placeholder='Githu link' onChange={(e) => {
              let inp = e.target.value
              setinputsval((prev) => ({
                ...prev,
                giturl: inp

              }))
            }}
              value={inputsval.giturl} />

            <div className="update-navi">
              <button onClick={() => {
                // closeModal()
                handlesubmit()
              }} >Submit</button>
              <button onClick={() => {
                closeModal()
              }} >Edit Project</button>
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
  gap: .5rem;

  display:grid;
  grid-template-columns:40%  60% ; 
  background-color: transparent;
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


export default ProjectUp

