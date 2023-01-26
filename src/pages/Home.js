import { useContext } from "react";
import { MyBooks } from "../components/MyBooks";
import { UserContext } from "../context/UserContext";
import LogIn from "./LogIn";
import Recommendations from "../components/Recommendation";

function Home() {
  const { token } = useContext(UserContext);
  return <>{!token ? <LogIn /> : <Recommendations />}</>;
}

export default Home;
