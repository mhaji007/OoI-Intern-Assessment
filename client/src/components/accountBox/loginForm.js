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
import { authenticate } from "../helpers/auth";
import axios from "axios";
import { Redirect } from "react-router-dom";

export function LoginForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText: "Login",
    error: "",
    success: "",
    redirectToReferer: false,
  });
  const { switchToRegister } = useContext(AccountContext);

  const { email, password, error, success, redirectToReferer, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      error: "",
      success: "",
      [name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, loading: true, buttonText: "Logging in..." });
    login();
  };

  const login = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/login`,
        {
          email,
          password,
        }
      );
      authenticate(response.data, () => {
        setState({
          ...state,
          email: "",
          password: "",
          buttonText: "Logged in",
          success: response.data.message,
          loading: false,
          redirectToReferer: true,
        });
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Login",
        error: error.response.data.error,
        loading: false,
      });
    }
  };

  if (redirectToReferer) {
    return <Redirect to="/home" />;
  }

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
          type="email"
          placeholder="Email"
          value={email || ""}
          onChange={handleChange("email")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password || ""}
          onChange={handleChange("password")}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="forgot-password">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        {buttonText}
      </SubmitButton>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToRegister}>
          Register
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
