import Spinner from 'react-bootstrap/Spinner';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MySpinner() {
    const { loading } = useContext(UserContext);

  return (
    <>
      {loading && (
       <Spinner className='ms-5 ms-5 ms-5 mt-5 mt-5' animation="grow" />
      )}
    </>
  );
}