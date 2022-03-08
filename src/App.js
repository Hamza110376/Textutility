import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "Success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success")
    }
  };
  return (
    <>
  
      <Navbar
        title="Textutales"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Add text here" mode={mode} alert={alert} />

      </div>
  
    </>
  );
}

export default App;
