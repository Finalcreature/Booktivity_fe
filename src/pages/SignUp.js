import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
// import axios from "axios";
// import { toast } from "react-toastify";
import countryList from "react-select-country-list";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function SignUp() {
  const { handleSignup, signupInfo, setSignupInfo } = useContext(UserContext);
  // const [origin, setOrigin] = useState("")
  const options = useMemo(() => countryList().getData(), []);
  //   const [signupInfo, setSignupInfo] = useState({
  //     username: "",
  //     country: "",
  //     age: "",
  //     email: "",
  //     password: "",
  //     repassword: "",
  //   });

  // const handleCountryChange = (e) => {setOrigin(e.target.value)}

  const { username, country, age, email, password, repassword } = signupInfo;

  const handleChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.id]: e.target.value });
  };

  const handleCountry = (value) => {
    setSignupInfo({ ...signupInfo, country: value.label });
  };

  useEffect(() => {
    console.log(signupInfo);
  }, [signupInfo]);

  //   const handleSignup = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const signUser = await axios.post("/api/signup", {
  //         userName,
  //         country,
  //         age,
  //         email,
  //         password,
  //       });

  //       if (signUser.data.success === true) {
  //         setUserInfo({
  //           userName: "",
  //           country: "",
  //           age: "",
  //           email: "",
  //           password: "",
  //           repassword: "",
  //         });
  //         toast.success("Sign up successfull, please log in.");
  //       }
  //     } catch (err) {
  //       console.log(err.response.data.error);
  //       toast.error(err.response.data.error);
  //     }
  //   };

  return (
    <div className="container signup-container mt-5">
      <Form onSubmit={handleSignup}>
        <FloatingLabel
          onChange={handleChange}
          value={username}
          controlId="username"
          label="User Name"
          className="mb-3"
        >
          <Form.Control required type="text" placeholder="username" />
        </FloatingLabel>

        <FloatingLabel
          onChange={handleChange}
          value={email}
          controlId="email"
          label="Email address"
          className="mb-3"
        >
          <Form.Control required type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          onChange={handleChange}
          value={age}
          controlId="age"
          label="Age"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="age" />
        </FloatingLabel>

          <Form.Select
            onChange={handleChange}
            className="mb-3"
            aria-label="Default select example"
            id="gender"
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </Form.Select>

        <FloatingLabel controlId="country" className="mb-3">
          <Select
            options={options}
            value={country}
            placeholder="Country of Origin"
            onChange={handleCountry}
          />
        </FloatingLabel>

      

        <FloatingLabel
          onChange={handleChange}
          value={password}
          controlId="password"
          label="Password"
          className="mb-3"
        >
          <Form.Control required type="password" placeholder="password" />
        </FloatingLabel>
        <FloatingLabel
          onChange={handleChange}
          value={repassword}
          controlId="repassword"
          label="Confirm Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="confirm password" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
