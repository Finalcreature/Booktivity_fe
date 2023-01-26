import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    country: "",
    age: "",
    email: "",
    gender: "",
    password: "",
    repassword: "",
  });
  const { username, country, age, email, password, repassword, gender } =
    signupInfo;

  const [currentUser, setCurrentUser] = useState({
    userId: "",
    username: "",
    repPoints: "",
    finished: "",
    currently: "",
    wishlist: "",
  });

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  const headersConfig = {
    authorization: `Bearer ${token}`,
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const signUser = await axios.post("http://localhost:8080/user/signup", {
        username,
        country,
        age,
        gender,
        email,
        password,
        repassword,
      });
      console.log(signUser);
      if (signUser.status === 200) {
        setSignupInfo({
          username: "",
          country: "",
          age: "",
          email: "",
          password: "",
          repassword: "",
        });
        setLoading(false);
        toast.success("Sign up successfull, please log in.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axios.post(
        "http://localhost:8080/user/login",
        loginInfo
      );

      if (data) {
        setLoginInfo({
          email: "",
          password: "",
        });
        console.log(data);
        setCurrentUser(data.data.user);
        setLoading(false);
        toast.success("Log in successfull.");
        window.location.reload();
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(data.data.token));
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        token,
        setToken,
        headersConfig,
        handleSignup,
        handleLogin,
        loginInfo,
        setLoginInfo,
        signupInfo,
        setSignupInfo,
        loading,
        setLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
}
