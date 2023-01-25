import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import SignUp from "./pages/SignUp";
import React, { useState, useEffect } from "react";
import LogIn from "./pages/LogIn";
import UserContextProvider from "./context/UserContext";
import BookContextProvider from "./context/BookContext";
import Leaderboard from "./pages/Leaderboard";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";

function App() {

const notify = () => {
  toast("hello")
}

  return (
    <UserContextProvider>
      <BookContextProvider>
        <div className="App">
          <NavBar />
          {/* <SignUp /> */}
          <LogIn />
          {/* <Leaderboard /> */}
          <ToastContainer />
          <button onClick={notify}>notify</button>
        </div>
      </BookContextProvider>
    </UserContextProvider>
  );
}

export default App;
