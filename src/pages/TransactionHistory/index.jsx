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

  return (
    <Container>
      <Header title="Histórico de Transações" />
      <List>
        <ProviderCard button={button} />
        <ProviderCard button={button} />
        <ProviderCard button={button} />
        <ProviderCard button={button} />
        <ProviderCard button={button} />
        <ProviderCard button={button} />
      </List>
    </Container>
  );
};

export default TransactionHistory;
