import { BoxContainer } from "../components/accountBox/common";

import {
  HeaderContainer,
  HeaderText,
  SmallText,

} from "../components/accountBox/forgotPasswordForm";

import React from "react";

function Home() {
  return (
    <BoxContainer>
      <HeaderContainer>
        {/* <Icon/> */}
        <HeaderText>Congratulation!</HeaderText>

        <SmallText>You have successfully logged in.</SmallText>
      </HeaderContainer>
    </BoxContainer>
  );
}

export default Home;
