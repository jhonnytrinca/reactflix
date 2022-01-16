import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { openRegisterVideo } from "../redux-flow/reducers/ui/actions-creators";
import { headerHeight } from "../utils/constants";

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>
      Cadastrar video
    </RegisterButton>
  </Header>
);

const Header = styled.header`
  height: ${headerHeight};
  display: flex;
  background: blue;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const RegisterButton = styled.button`
  margin-bottom: 0;
`;

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo()),
});

export default connect(null, mapDispatchToProps)(MainHeader);
