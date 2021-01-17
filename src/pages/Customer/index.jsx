import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./style";

import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import Button from "../../components/Button";

const Customer = () => {
  const history = useHistory();

  const backToProvidersList = () => {
    history.push("/bidlist");
  };

  const user = "fornecedor";

  return (
    <Container>
      <Header title="Contato do Fornecedor" onBack={backToProvidersList} />
      <InfoCard user={user} />

      <Button
        background="transparent"
        color="rgba(0, 0, 0, 0.22)"
        onClick={backToProvidersList}
      >
        {user === "empresa" ? "Tela inicial" : "Voltar para a lista"}
      </Button>
    </Container>
  );
};

export default Customer;
