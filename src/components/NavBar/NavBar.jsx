import React from "react";
import { Flex, NavBrand, Container, Nav, NavItem, NavLink } from "./Component";
/**
 * Component for Navar at the Top of the page.
 *
 * @component
 * @example
 *
 *
 *
 *  return (
 *   <NavBar />
 * )
 */
function NavBar() {
  return (
    <Container>
      <Flex>
        <NavBrand href="/">conduit</NavBrand>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Register</NavLink>
          </NavItem>
        </Nav>
      </Flex>
    </Container>
  );
}

export default NavBar;
