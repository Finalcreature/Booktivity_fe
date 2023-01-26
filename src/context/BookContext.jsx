import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [isbn, setIsbn] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const headersConfig = { Authorization: `Bearer ${token}` };

  const handleSearch = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const query = {
      title: search,
      author,
      publisher: year,
      rating,
      isbn,
    };

    for (let property in query) {
      if (query[property] === "") {
        Object.defineProperty(query, property, { configurable: true });
        delete query[property];
      }
    }

    console.log(query);

    const res = await axios.get("http://localhost:8080/books", {
      headers: headersConfig,
      params: query,
    });
    setResult(res.data);
  };

  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        result,
        setResult,
        handleSearch,
        setTitle,
        setAuthor,
        setYear,
        setRating,
        setIsbn,
        title,
        author,
        year,
        rating,
        isbn,
      }}>
      {children}
    </BookContext.Provider>
  );
}
