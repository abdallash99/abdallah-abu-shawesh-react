import styled from "styled-components";
import colors from "../../color";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const NavBrand = styled.a`
  font-family: "titillium web", sans-serif;
  font-size: 1.5rem !important;
  padding-top: 0 !important;
  margin-right: 2rem !important;
  color: ${colors.primary}!important;
  text-decoration: none;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
