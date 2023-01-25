import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import countryList from "react-select-country-list";

function SignUp() {
  const options = useMemo(() => countryList().getData(), []);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    country: "",
    age: "",
    email: "",
    password: "",
    repassword: "",
  });

  const { userName, country, age, email, password, repassword } = userInfo;

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const signUser = await axios.post("/api/signup", {
        userName,
        country,
        age,
        email,
        password,
      });

      if (signUser.data.success === true) {
        setUserInfo({
          userName: "",
          country: "",
          age: "",
          email: "",
          password: "",
          repassword: "",
        });
        toast.success("Sign up successfull, please log in.");
      }
    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="container signup-container">
      <Form onSubmit={handleSignup}>
        <FloatingLabel
          onChange={handleChange}
          value={userName}
          controlId="userName"
          label="User Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="username" />
        </FloatingLabel>

        <FloatingLabel
          onChange={handleChange}
          value={email}
          controlId="email"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
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

        <FloatingLabel
          controlId="country"
          value={country}
          onChange={handleChange}
          className="mb-3"
        >
          <Select options={options} placeholder="Country of origin" />
        </FloatingLabel>

        <FloatingLabel
          onChange={handleChange}
          value={password}
          controlId="password"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="password" />
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
