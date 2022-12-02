import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;
export const Text = styled.h1`
    font-family: "Recursive";
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    padding: 10px 0;
`;

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-top: -20px;
    padding-bottom: 10px;
`;

export const Image = styled.img`
    width: 20px;
    height: 23px;
`;

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InnerText = styled.p`
    font-family: "Recursive";
    font-size: 18px;
    font-weight: 400;
    color: #333333;   
`;