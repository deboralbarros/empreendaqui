import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ background }) => background};
  width: ${({ width }) => width};
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  box-shadow: ${({ shadow }) =>
    shadow
      ? "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)"
      : 0};

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border: ${({ border }) =>
    border ? "1px solid rgba(0, 0, 0, 0.33)" : "none"};
`;
