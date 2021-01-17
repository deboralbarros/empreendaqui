import {
  Container,
  Column,
  ColumnTitle,
  ColumnContent,
  Price,
  Date,
} from "./style";

const ProviderCard = ({ button, user }) => {
  return (
    <Container>
      <Column>
        <ColumnTitle>Produto</ColumnTitle>
        <ColumnContent>Pães Hot Dog</ColumnContent>
        <Price>{user === "empresa" ? "R$ 1,00/un" : "600/un por mês"}</Price>
      </Column>
      <Column>
        <ColumnTitle>
          {user === "empresa" ? "Fornecedor" : "Cliente"}
        </ColumnTitle>
        <ColumnContent>Atacadao 94 LTDA</ColumnContent>
        <Date>16/01/2021</Date>
      </Column>
      <Column>{button}</Column>
    </Container>
  );
};

export default ProviderCard;
