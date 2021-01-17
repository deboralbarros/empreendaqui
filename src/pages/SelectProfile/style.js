import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  text-transform: uppercase;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 30vh;
`;
