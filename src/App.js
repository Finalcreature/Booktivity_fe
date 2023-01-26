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
import PrivateRoute from "./components/PrivateRoute";
import Book from "./pages/Book";

function App() {
  return (
    <UserContextProvider>
      <BookContextProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<LogIn />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/leaderboard"
              element={
                <PrivateRoute>
                  <Leaderboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/search"
              element={
                <PrivateRoute>
                  <Search />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/book"
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
          </Routes>

          <ToastContainer />
        </div>
      </BookContextProvider>
    </UserContextProvider>
  );
}

export default App;
