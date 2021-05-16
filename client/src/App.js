import "./App.css";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import ForgotPassword from "./components/accountBox/forgotPasswordForm";
import Home from "./pages/Home";
import PrivateRoute from "./components/helpers/auth";

import { motion } from "framer-motion";

const app = "forgot";

const AppContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ app }) =>
    app === "forgot" ? `#2a2a72` : app === "home" ? "#3bb78f" : `#fff`};

  background-image: ${({ app }) =>
    app === "forgot"
      ? "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
      : app === "home"
      ? " linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)"
      : `#fff`};

  overflow: hidden;
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 },
    x: "0",
  },
};

function App() {

  let location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <AppContainer
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {" "}
              <AccountBox />
            </AppContainer>
          </Route>
          <PrivateRoute exact path="/home">
            <AppContainer
              app="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {" "}
              <Home />
            </AppContainer>
          </PrivateRoute>
          <Route exact path="/forgot-password">
            <AppContainer
              app="forgot"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ForgotPassword />
            </AppContainer>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
