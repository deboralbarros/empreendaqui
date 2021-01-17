import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;

  :first-child {
    margin: 0;
  }
`;

export const Column = styled.div`
  width: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnTitle = styled.h2`
  color: #3c3c3c;
  font-weight: 300;
  font-size: 14px;
`;

export const ColumnContent = styled.h3`
  color: #3c3c3c;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Price = styled.h3`
  color: #66bd74;
  font-weight: 300;
  font-size: 14px;
  margin: 8px;
`;

export const Date = styled.h3`
  color: rgba(60, 60, 60, 0.7);
  font-weight: 300;
  font-size: 16px;
  margin: 8px;
`;
