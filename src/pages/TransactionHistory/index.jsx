import { Container, List } from "./style";

import Header from "../../components/Header";
import ProviderCard from "../../components/ProviderCard";
import Button from "../../components/Button";

const TransactionHistory = () => {
  const button = (
    <Button background="transparent" border color="rgba(0, 0, 0, 0.33)">
      Mais detalhes
    </Button>
  );

  const user = "fornecedor";

  return (
    <Container background={user}>
      <Header title="Histórico de Transações" />
      <List>
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
        <ProviderCard button={button} user={user} history />
      </List>
    </Container>
  );
};

export default TransactionHistory;
