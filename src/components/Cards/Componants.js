import styled from "styled-components";
import colors from "../../color";

export const CardsWarrper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Tabs = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  display: block;
`;

export const Tab = styled.li`
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background: 0 0;
  display: inline-block;
  padding: 0.5rem 1rem;
  color: ${(props) => (!props.active ? colors.lightGray : colors.primary)};
  border-bottom: ${(props) =>
    !props.active
      ? "2px solid transparent"
      : `2px solid ${colors.primary}!important;`};
  cursor: ${(props) => (props.active ? "auto" : "pointer")}; ;
`;

export const Home = styled.div`
  margin-bottom: 3rem;
`;
