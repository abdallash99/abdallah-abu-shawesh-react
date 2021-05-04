import styled from "styled-components";
import colors from "../../color";

export const TagsWarrper = styled.div`
  margin-top: 2rem;
  background-color: #f3f3f3;
  padding: 0.5rem;
`;

export const TagTittle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block;
  background-color: #818a91;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;

  :hover {
    background-color: ${colors.gray};
  }
`;

export const TagLink = styled.div`
  color: ${colors.white}!important;
  text-decoration: none;
  cursor: pointer;
  display: inline;
`;
