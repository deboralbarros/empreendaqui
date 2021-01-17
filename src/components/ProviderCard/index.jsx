import { useHistory } from "react-router-dom";

import {
  Container,
  Column,
  ColumnTitle,
  ColumnContent,
  Price,
  Date,
} from "./style";

import Button from "../Button";

const ProviderCard = () => {
  const history = useHistory();

  const navigateToProvider = () => {
    history.push("/provider");
  };

  return (
    <Container>
      <Column>
        <ColumnTitle>Produto</ColumnTitle>
        <ColumnContent>Pães Hot Dog</ColumnContent>
        <Price>R$ 1,00/un</Price>
      </Column>
      <Column>
        <ColumnTitle>Fornecedor</ColumnTitle>
        <ColumnContent>Atacadao 94 LTDA</ColumnContent>
        <Date>16/01/2021</Date>
      </Column>
      <Column>
        <Button background="#4FC18E" width="100%" onClick={navigateToProvider}>
          Contatar fornecedor
        </Button>
      </Column>
    </Container>
  );
};

export default ProviderCard;
