import { createContext, useState } from "react";
import React from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
export const Dataprovider = createContext();
export const DataContext = ({ children }) => {
  let [verifypass, setverifypass] = useState(false)
  let [updatingmodel, setupdatingmodel] = useState(false)
  let [passwordsuccess, setpasswordsuccess] = useState(false)
  let [stateUpDb, setstateUpDb] = useState(false)
  const apikey = import.meta.env.VITE_APP_URL
  const maintost = (msg, type = 'default') => {
    (toast[type](msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    }))
  }
  let values = { updatingmodel, setupdatingmodel, passwordsuccess, setpasswordsuccess, verifypass, setverifypass, apikey, maintost, stateUpDb, setstateUpDb };
  const [one, setone] = useState(false);

  return (
    <Dataprovider.Provider value={values}>{children}</Dataprovider.Provider>
  );
};
