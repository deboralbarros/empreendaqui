import {
  Container,
  Column,
  ColumnTitle,
  ColumnContent,
  Price,
  Date,
} from "./style";

const ProviderCard = ({ button }) => {
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
      <Column>{button}</Column>
    </Container>
  );
};

export default ProviderCard;
