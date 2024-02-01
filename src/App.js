import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import Register from "./components/Register";
import Alert from "./components/Alert";
import { useState } from "react";



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return (
    <>
      <NoteState showAlert={showAlert}>
        <Router>
          <Navbar title="iNotebook" showAlert={showAlert} />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert}/>}  />
              <Route path="/About" element={<About showAlert={showAlert}/>} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<Register showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
