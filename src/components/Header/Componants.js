import styled from "styled-components";
import colors from "../../color";

export const HeaderWarpper = styled.div`
  background-color: ${colors.primary};
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  text-align: center;
  color: ${colors.white};
`;

export const HeaderTitle = styled.div`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-family: "titillium web", sans-serif;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const HeaderText = styled.div`
  font-size: 1.5rem;
`;
