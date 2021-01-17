import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) =>
    background === "empresa"
      ? "rgba(79, 193, 142, 0.22)"
      : background === "jovem"
      ? "rgba(79, 145, 193, 0.22)"
      : "rgba(222, 103, 103, 0.08)"};
  height: 100vh;
  padding-bottom: 50px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
