import React, { useState } from "react";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { RegisterForm } from "./registerForm";

import styled from "styled-components";

const BoxContainer = styled.div`
  width: 250px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.2);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 173%;
  height: 535px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(59deg);
  top: -290px;
  left: -70px;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 40px;
  bottom: 40px;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  margin-top: 7px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;
const backdropVariants = {
  expanded: {
    width: "263%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "173%",
    height: "535px",
    borderTadius: "50%",
    transform: "rotate(59deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox() {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("register");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  const switchToRegister = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("register");
    }, 400);
  };

  const switchToLogin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };
  const contextValue = { switchToRegister, switchToLogin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "login" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please log in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "register" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please register to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "login" && <LoginForm />}
          {active === "register" && <RegisterForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
