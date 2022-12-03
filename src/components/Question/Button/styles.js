import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

export const Text = styled.p`
  font-family: "Recursive";
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
`;
