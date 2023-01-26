import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";

function Book() {
  const { currentUser } = useContext(UserContext);
  const [thisBook, setThisBook] = useState({});

  const addToWishlist = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8080/user/${currentUser.userId}/wishlist`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book added to your wishlist.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const removeFromWishlist = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/user/${currentUser.userId}/wishlist`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book removed from your wishlist.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const addToCurrentBooks = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8080/user/${currentUser.userId}/currently`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book added to currently reading.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const removeFromCurrentBooks = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/user/${currentUser.userId}/currently`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book removed from currently reading.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const addToFinishedBooks = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8080/user/${currentUser.userId}/finished`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book added to finished reading.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const removeFromFinishedBooks = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/user/${currentUser.userId}/finished`, thisBook._id 
      );
      if (data) {
        console.log(data);
        toast.success("Book removed from finished reading.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="container mt-3">
      <div className="book-header">
        <h1>Book Title</h1>
        <h2>Author</h2>
        <h3>Year</h3>
        <h3>Rating</h3>
      </div>
      <div className="book-image"></div>
      <div className="book-summary mt-5 container">
        <p>
          In this ground-breaking book, Clears reveals exactly how these
          minuscule changes can grow into such life-altering outcomes. He
          uncovers a handful of simple life hacks (the forgotten art of Habit
          Stacking, the unexpected power of the Two Minute Rule, or the trick to
          entering the Goldilocks Zone), and delves into cutting-edge psychology
          and neuroscience to explain why they matter. Along the way, he tells
          inspiring stories of Olympic gold medalists, leading CEOs, and
          distinguished scientists who have used the science of tiny habits to
          stay productive, motivated, and happy.
        </p>
      </div>
      <div className="book-buttons">
        <Button onClick={addToCurrentBooks} className="me-1">Reading</Button>
        <Button onClick={removeFromCurrentBooks} className="me-1">Stop Reading</Button>
        <Button onClick={addToFinishedBooks} className="me-1">Finished</Button>
        <Button onClick={removeFromFinishedBooks} className="me-1">Didn't Finish</Button>
        <Button onClick={addToWishlist} className="me-1">
          Wishlist
        </Button>
        <Button onClick={removeFromWishlist} className="me-1">
          Unsave
        </Button>
        <Button>Buy</Button>
      </div>
    </div>
  );
}

export default Book;
