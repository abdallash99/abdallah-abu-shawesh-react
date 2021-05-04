import styled from "styled-components";
import colors from "../../color";

export const PaginationWarrper = styled.ul`
  display: block;
  list-style: none;
  :first {
    margin-left: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
`;

export const PaginationLink = styled.div`
  text-decoration: none;
  color: ${colors.primary};
  cursor: pointer;
`;

export const PaginationItem = styled.li`
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: ${colors.primary};
  text-decoration: none;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  background-color: ${(props) =>
    props.active ? colors.primary : colors.white};
  color: ${(props) => (!props.active ? colors.primary : colors.white)};
  :hover {
    text-decoration: underline;
    background-color: ${colors.lightGray};
  }
`;
