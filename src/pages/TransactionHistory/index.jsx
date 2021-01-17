import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, List } from "./style";

import Header from "../../components/Header";
import ProviderCard from "../../components/ProviderCard";
import Button from "../../components/Button";

const TransactionHistory = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    setUser(localUser);
  }, [user]);

  const history = useHistory();

  const backToHome = () => {
    history.push("/home");
  };

  const button = (
    <Button background="transparent" border color="rgba(0, 0, 0, 0.33)">
      Mais detalhes
    </Button>
  );

  return (
    <Container background={user}>
      <Header title="Histórico de Transações" onBack={backToHome} />
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
