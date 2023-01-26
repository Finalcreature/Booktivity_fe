import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResults";
export default function Recommendations() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const reccomendBooks = await axios.get("http://localhost:8080/model");
    console.log(reccomendBooks);
    setBooks(reccomendBooks.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <>
      <SearchResult search={books} />
    </>
  );
}
