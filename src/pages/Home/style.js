import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) =>
    background === "empresa"
      ? "rgba(79, 193, 142, 0.22)"
      : background === "jovem"
      ? "rgba(79, 145, 193, 0.22)"
      : "rgba(222, 103, 103, 0.08)"};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 100%;
  justify-content: space-around;
  padding: 20px;
  padding-bottom: 120px;
  color: rgba(0, 0, 0, 0.34);
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 1000;
  text-align: center;
`;

export const Applogo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
