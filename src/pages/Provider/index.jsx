import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Container } from "./style";

import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import Button from "../../components/Button";

const Provider = () => {
  const history = useHistory();

  const backToProvidersList = () => {
    history.push("/providerslist");
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    setUser(localUser);
  }, [user]);

  return (
    <Container>
      <Header title="Contato do Fornecedor" onBack={backToProvidersList} />
      <InfoCard user={user} />

      <Button
        background="transparent"
        color="rgba(0, 0, 0, 0.22)"
        onClick={() => history.push("/home")}
      >
        Tela inicial
      </Button>
    </Container>
  );
};

export default Provider;
