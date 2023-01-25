import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import  AppContext  from "../context/AppContext";
import { useContext } from "react";

function LogIn() {
  const { setLoading, setLoggedIn, loggedIn, setUserRole } =
    useContext(AppContext);
//   const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };

  const { email, password } = loginInfo;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/signin", {
        email,
        password,
      });

      if (data.success === true) {
        setLoginInfo({
          email: "",
          password: "",
        });
        // setUserRole(data.userRole)
        // setLoggedIn(true);
        // setLoading(false);
        toast.success("Log in successfull.");
        // navigate("/");
        
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(data));
        }
      } else {
      }
    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error);
    }
  };

  

  return (
    <div className="container signup-container mt-5">
    <Form onSubmit={handleLogin}>
      <FloatingLabel
        onChange={handleChange}
        controlId="email"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        onChange={handleChange}
        controlId="password"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <a  className="signup-link ms-2">
        First time? Create an account.
      </a>
    </Form>
    </div>
  );
}

export default LogIn;
