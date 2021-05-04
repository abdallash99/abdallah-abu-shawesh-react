import React from "react";
import { Container } from "../NavBar/Component";

import { HeaderWarpper, HeaderText, HeaderTitle } from "./Componants";
/**
 * Component for Header at the Top of the page;
 *
 * @component
 * @example
 *
 *
 *  *
 *  return (
 *   <Header />
 * )
 */
function Header() {
  return (
    <HeaderWarpper>
      <Container>
        <HeaderTitle>conduit</HeaderTitle>
        <HeaderText>A place to share your knowledge.</HeaderText>
      </Container>
    </HeaderWarpper>
  );
}

export default Header;
