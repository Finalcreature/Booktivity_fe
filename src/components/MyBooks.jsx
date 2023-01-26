import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import BookCard from "./BookCard";

export const MyBooks = () => {
  const { currentUser } = useContext(UserContext);
  const [chosenList, setChosenList] = useState("currently")
  const [myBooks, setMyBooks] = useState([]);

  const handleChosenList = (e) => {
    setChosenList({ [e.target.id]: e.target.value });
  };

  const showMyBooks = async () => {
    if (chosenList === "currently") {
     try {
      const data = await axios.get(
        `http://localhost:8080/user/${currentUser.userId}/currently`
      );
      if (data) {
        console.log(data);
        setMyBooks(data)
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    } } else if (chosenList === "finsished") {
      try {
        const data = await axios.get(
          `http://localhost:8080/user/${currentUser.userId}/finished` 
        );
        if (data) {
          console.log(data);
          setMyBooks(data)
        }
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    } else if (chosenList === "wishlist") {
      try {
        const data = await axios.get(
          `http://localhost:8080/user/${currentUser.userId}/wishlist`  
        );
        if (data) {
          console.log(data);
          setMyBooks(data)
        }
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    }}
    

const handleChange = () => {
  handleChosenList();
  showMyBooks();
}

  return (
    <div>
      <h1 className="mt-3">My Books</h1>
      <Form className="d-flex w-75 m-auto mt-3 mb-5">
        <Form.Select
          onChange={handleChange}
          id="chosenList"
          className="me-2"
          aria-label="Default select example"
        >
          <option value="currently">Books I currently read:</option>
          <option value="finished">Books I have finished reading:</option>
          <option value="wishlist">Show my Wishlist</option>
        </Form.Select>
      </Form>
      <div className="results-component">
      <div className="books-card-container">
        {myBooks.map((book) => (
          <BookCard
            id={book._id}
            key={book._id}
            picture={book.image}
            title={book.title}
            author={book.author}
            year={book.year}
            rating={book.rating}
            isbn={book.isbn}
          />
        ))}
      </div>
    </div>
    </div>
  );
};
