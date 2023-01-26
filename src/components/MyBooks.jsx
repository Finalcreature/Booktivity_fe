import React from "react";
import Form from "react-bootstrap/Form";

export const MyBooks = () => {
    const handleMyBooks = () => {}
  return (
    <div>
      <h1 className="mt-3">My Books</h1>
      <Form className="d-flex w-75 m-auto mt-3 mb-5">
        <Form.Select onChange={handleMyBooks} className="me-2" aria-label="Default select example">
          <option value="currently">Books I currently read:</option>
          <option value="finished">Books I have finished reading:</option>
          <option value="wishlist">Show my Wishlist</option>
        </Form.Select>
      </Form>
    </div>
  );
};
