import "./App.css";
import SignUp from "./pages/SignUp";
import React, { useState, useEffect } from "react";
import LogIn from "./pages/LogIn";
import UserContextProvider from "./context/UserContext";
import BookContextProvider from "./context/BookContext";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <UserContextProvider>
      <BookContextProvider>
        <div className="App">
          <SignUp />
          {/* <LogIn /> */}
          {/* <Leaderboard /> */}
        </div>
      </BookContextProvider>
    </UserContextProvider>
  );
}

export default App;
