import { useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResults";
import { Spinner } from "react-bootstrap";
export default function Recommendations() {
  const [books, setBooks] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const headersConfig = { Authorization: `Bearer ${token}` };
  async function getBooks() {
    const reccomendBooks = await axios.get("http://localhost:8080/model", {
      headers: headersConfig,
    });
    console.log(reccomendBooks);
    setBooks(reccomendBooks.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  if (!books.length)
    return <Spinner className="ms-5 ms-5 ms-5 mt-5 mt-5" animation="border" />;

  return (
    <>
      <SearchResult search={books} />
    </>
  );
}
