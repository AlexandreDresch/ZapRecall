import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 136px;
  height: 161px;
  margin-bottom: 13px;
`;

export const Text = styled.h1`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 246px;
  height: 54px;
  background-color: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const ButtonText = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #d70900;
`;
