import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Book() {
  const location = useLocation();
  const currentId = location.search.slice(4);

  // const { currentUser } = useContext(UserContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [thisBook, setThisBook] = useState({});

  const token = JSON.parse(localStorage.getItem("token"));
  const headersConfig = { Authorization: `Bearer ${token}` };

  async function getBookInfos(id) {
    const info = await axios.get(`http://localhost:8080/books/${id}`, {
      headers: headersConfig,
    });
    setThisBook(info.data);
  }

  useEffect(() => {
    getBookInfos(currentId);
  }, []);

  const addToWishlist = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8080/user/${currentUser}/wishlist`,
        currentId,
        { headers: headersConfig }
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
        `http://localhost:8080/user/${currentUser}/wishlist`,
        { headers: headersConfig, body: currentId }
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
        `http://localhost:8080/user/${currentUser}/currently`,
        currentId,
        { headers: headersConfig }
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
        `http://localhost:8080/user/${currentUser}/currently`,
        { headers: headersConfig, body: currentId }
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
        `http://localhost:8080/user/${currentUser}/finished`,
        currentId,
        { headers: headersConfig }
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
        `http://localhost:8080/user/${currentUser}/finished`,
        { headers: headersConfig, body: currentId }
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

  if (!thisBook) return;

  const { author, image, isbn, publisher, title, year, _id } = thisBook;

  return (
    <div className="container mt-3">
      <div className="book-header">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{year}</h3>
        {/* <h3>Rating</h3> */}
      </div>
      <img className="book-image" src={image}></img>
      {/* <div className="book-summary mt-5 container">
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
      </div> */}
      <div className="book-buttons">
        <Button onClick={addToCurrentBooks} className="me-1">
          Reading
        </Button>
        <Button onClick={removeFromCurrentBooks} className="me-1">
          Stop Reading
        </Button>
        <Button onClick={addToFinishedBooks} className="me-1">
          Finished
        </Button>
        <Button onClick={removeFromFinishedBooks} className="me-1">
          Didn't Finish
        </Button>
        <Button onClick={addToWishlist} className="me-1">
          Wishlist
        </Button>
        <Button onClick={removeFromWishlist} className="me-1">
          Unsave
        </Button>
      </div>
    </div>
  );
}

export default Book;
