import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {

  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [isbn, setIsbn] = useState("");


  const getResults = async () => {
    const res = await axios.get("http://localhost:8080/books", {
      params: {
        searchTerms: search,
      },
    });
    setResult(res.data.data);
  };

  const getResultsAdvance = async () => {
    const res = await axios.get("http://localhost:8080/books", {
      params: {
        searchTerms: title,
        author,
        year,
        rating,
        isbn,
      
      },
    });
    setResult(res.data.data);
  };

  
  const handleSubmitAdvancedSearch = (event) => {
    event.preventDefault();
    getResultsAdvance();
  };

   
  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        result,
        setResult,
        getResults,
        getResultsAdvance,
        handleSubmitAdvancedSearch,
        setTitle,
        setAuthor,
        setYear,
        setRating,
        setIsbn,
        title,
        author,
        year,
        rating,
        isbn
      }}
    >
      {children}
    </BookContext.Provider>
  );
}