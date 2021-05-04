import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardsWarrper = styled.div`
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    order: 2;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const TagsWarrper = styled.div`
  margin-left: 1rem;
  @media (max-width: 768px) {
    order: 1;
    margin-right: 1rem;
  }
`;
