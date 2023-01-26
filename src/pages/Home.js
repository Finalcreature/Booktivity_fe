import { useContext } from "react";
import { MyBooks } from "../components/MyBooks";
import { UserContext } from "../context/UserContext";
import LogIn from "./LogIn";

function Home() {
  const { token } = useContext(UserContext);
  return (
    <>
      <div>We are at home page</div>;{/* <Book /> */}
      {!token && <LogIn />}
      {/* <MyBooks /> */}
    </>
  );
}

export default Home;
