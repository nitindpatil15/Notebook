import React, { useState } from "react";
import Notes from "./Notes";
import Alert from "./Alert";


const Home = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  return (
    <>
      <div className="container my-3">
        <Alert alert={alert}/>
        <Notes showAlert={showAlert}/>
      </div>
    </>
  );
};

export default Home;
