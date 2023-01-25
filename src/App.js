import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import SignUp from "./pages/SignUp";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import UserContextProvider from "./context/UserContext";
import BookContextProvider from "./context/BookContext";
import Leaderboard from "./pages/Leaderboard";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Home from "./pages/Home";
import UserProfile from "./pages/Profile";

function App() {
  return (
    <UserContextProvider>
      <BookContextProvider>
        <div className="App">
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/leaderboard" element={ <Leaderboard />} />

            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>

          
         
          <ToastContainer />
        </div>
      </BookContextProvider>
    </UserContextProvider>
  );
}

export default App;
