import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);


  const [inputs, setInputs] = useState({});
  function updateInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const token = JSON.parse(localStorage.getItem("token"));
  const headersConfig = { Authorization: `Bearer ${token}` };

  const handleSearch = async (e) => {
    if (e) {
      e.preventDefault();
    }

    for (let property in inputs) {
      if (inputs[property] === "") {
        Object.defineProperty(inputs, property, { configurable: true });
        delete inputs[property];
      }
    }
    console.log(inputs)

    const res = await axios.get("http://localhost:8080/books", {
      headers: headersConfig,
      params: inputs,
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
        updateInputs,
      }}>
      {children}
    </BookContext.Provider>
  );
}
