import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const MyBooks = () => {
  const { currentUser } = useContext(UserContext);
  const [myBooks, setMyBooks] = useState([]);

  const showMyBooks = () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/user/${currentUser.userId}/wishlist`,  
      );
      if (data) {
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <div>
      <h1 className="mt-3">My Books</h1>
      <Form className="d-flex w-75 m-auto mt-3 mb-5">
        <Form.Select
          onChange={showMyBooks}
          className="me-2"
          aria-label="Default select example"
        >
          <option value="currently">Books I currently read:</option>
          <option value="finished">Books I have finished reading:</option>
          <option value="wishlist">Show my Wishlist</option>
        </Form.Select>
      </Form>
    </div>
  );
};
