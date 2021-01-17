import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.04);
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  button {
    margin: 10px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 20px 0;
`;

export const Label = styled.label`
  font: 500 24px "IBM Plex Sans";
  color: #767676;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #949494;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  font-size: 18px;
  color: #cacaca;
`;
