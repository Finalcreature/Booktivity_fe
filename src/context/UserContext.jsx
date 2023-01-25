import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
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
  const { username, country, age, email, password, repassword, gender } = signupInfo;


  const [currentUser, setCurrentUser] = useState({
    userId: "",
    username: "",
    repPoints: "",
    finished: "",
    currently: "",
    wishlist: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const headersConfig = {
    authorization: `Bearer ${token}`,
  };

  const handleSignup = async (e) => {
    e.preventDefault();
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
        toast.success("Sign up successfull, please log in.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const data  = await axios.post(
        "http://localhost:8080/user/login",
        loginInfo
      );

      if (data) {
        setLoginInfo({
          email: "",
          password: "",
        });
        console.log(data);
       setCurrentUser(data.data.user)
        // setUserRole(data.userRole)
        // setLoggedIn(true);
        // setLoading(false);
        toast.success("Log in successfull.");
        // navigate("/");
        
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(data));
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
