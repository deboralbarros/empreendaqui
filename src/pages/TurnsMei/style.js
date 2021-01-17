import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) =>
    background === "empresa"
      ? "rgba(79, 193, 142, 0.22)"
      : background === "jovem"
      ? "rgba(79, 145, 193, 0.22)"
      : "rgba(222, 103, 103, 0.08)"};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const P = styled.p`
  margin: 15px 0;
  width: 90%;
  font: 300 18px "IBM Plex Sans", sans-serif;
`;

export const Link = styled.a`
  color: #005aac;
  opacity: 0.7;
  text-decoration: none;
  font-size: 18px;
  display: block;
  width: 90%;
  margin: 0 auto 20px;
`;
