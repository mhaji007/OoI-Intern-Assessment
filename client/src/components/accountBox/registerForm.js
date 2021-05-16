import React, { useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  MessageContainer,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function RegisterForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Register",
    error: "",
    success: "",
  });
  const { switchToLogin } = useContext(AccountContext);

  const { name, email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      success: "",
      error: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Registering..." });
    register();
  };

  const register = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/register`,
        {
          name,
          email,
          password,
        }
      );
      await setState({
        ...state,
        name: "",
        email: "",
        password: "",
        buttonText: "Registered",
        success: response.data.message,
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Register",
        error: error.response.data.error,
      });
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        {success ? (
          <MessageContainer type="success">{success}</MessageContainer>
        ) : error ? (
          <MessageContainer type="error">{error}</MessageContainer>
        ) : (
          ""
        )}
        <Input
          type="text"
          placeholder="Name"
          defaultVal={name}
          onChange={handleChange("name")}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        {buttonText}
      </SubmitButton>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToLogin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
