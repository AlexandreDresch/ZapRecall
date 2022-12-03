import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 15px 23px;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
`;
export const Text = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decoration};
`;
export const Image = styled.img`
  width: 20px;
  height: 23px;
`;

export const OpenedContainer = styled.div`
  width: 300px;
  height: 131px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  padding: 10px 23px;
  background-color: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;

  div {
    display: flex;
    gap: 8px;
  }
`;

export const TurnCardImage = styled.img`
  width: 30px;
  position: absolute;
  bottom: 6px;
  right: 6px;
`;
