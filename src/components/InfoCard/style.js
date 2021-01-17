import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #3c3c3c;
  font-weight: 300;
  font-size: 16px;
`;

export const Content = styled.h2`
  color: #3c3c3c;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  margin: 2px;
`;

export const Date = styled.h3`
  color: rgba(60, 60, 60, 0.7);
  font-weight: 300;
  font-size: 14px;
  margin: 20px;
`;

export const Contact = styled.h3`
  color: rgba(60, 60, 60, 0.7);
  font-weight: 300;
  font-size: 14px;
  margin: 20px;
`;

export const Price = styled.h3`
  color: #66bd74;
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding: 20px;
  margin-top: -15px;
  border: ${({ border }) => border && "1px solid #949494"};
  border-radius: 4px;
`;

export const Text = styled.p`
  color: #3c3c3c;
  margin: 10px 0;
  font-weight: ${({ normal }) => (normal ? "500" : "300")};
`;
