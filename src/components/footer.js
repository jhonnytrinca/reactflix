import React from "react";
import styled from "styled-components";
import { footerHeight } from "../utils/constants";

const MainFooter = () => <Footer>&copy; 2021</Footer>;

const Footer = styled.footer`
  height: ${footerHeight};
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default MainFooter;
