import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
function ToastCont() {

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  )
}

export default ToastCont