import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(79, 193, 142, 0.22);
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font: 500 24px "IBM Plex Sans";
  color: #767676;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #949494;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  font-size: 18px;
  color: #cacaca;
`;

export const Applogo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 50px;
`;

export const Space = styled.div`
  padding-bottom: 50px;
`;
