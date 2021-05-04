import styled from "styled-components";
import colors from "../../color";

export const CardWarrper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;

export const Avater = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
`;

export const Name = styled.div`
  margin: 0 1.5rem 0 0.3rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
`;

export const PrimaryLink = styled.a`
  text-decoration: none;
  color: ${colors.primary};
`;

export const Time = styled.span`
  color: #bbb;
  font-size: 0.8rem;
  display: block;
`;

export const Button = styled.button`
  :hover {
    color: ${colors.white};
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }
  :focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: ${colors.primary};
  background-image: none;
  background-color: transparent;
  border-color: ${colors.primary};
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 600 !important;
  font-size: 1.5rem !important;
  margin-bottom: 3px;
`;

export const Body = styled.p`
  color: ${colors.lightGray};
`;

export const NormalLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
`;

export const More = styled.span`
  max-width: 30%;
  font-size: 0.8rem;
  font-weight: 300;
  color: ${colors.lightGray};
  vertical-align: middle;
`;
