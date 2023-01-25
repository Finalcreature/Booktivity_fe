import "./App.css";
import AppContext from "./context/AppContext";
import SignUp from "./pages/SignUp";
import React, { useState, useEffect } from "react";
import LogIn from "./pages/LogIn";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const headersConfig = {
    authorization: `Bearer ${token}`,
  };

  return (
    <AppContext.Provider value={{ headersConfig, setToken }}>
      <div className="App">
        {/* <SignUp /> */}
       <LogIn />
      </div>
    </AppContext.Provider>
  );
}

export default App;
