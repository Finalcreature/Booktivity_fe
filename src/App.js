import "./App.css";
import AppContext from "./context/AppContext";
import SignUp from "./pages/SignUp";
import React, { useState, useEffect } from "react";

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
        <SignUp />
      </div>
    </AppContext.Provider>
  );
}

export default App;
