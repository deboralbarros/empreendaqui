import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Container, Form, Applogo, Space } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

import logoFornecedores from "../../images/GroupFornecedores.png";
import logoJovem from "../../images/Group16.png";

const ProvidersOptions = () => {
  const history = useHistory();

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  const navigateToHome = () => {
    history.push("/home");
  };

  const navigateTo = (route) => () => {
    history.push(`/${route}`);
  };

  return (
    <Container background={user}>
      <Header
        title={user === "empresa" ? "Fornecedores" : "Comece seu negócio"}
        onBack={navigateToHome}
      />
      <Form>
        <Button
          background={user === "jovem" ? "#4F91C1" : "#4FC18E"}
          width="100%"
          shadow
          onClick={
            user === "jovem"
              ? navigateTo("tips")
              : navigateTo("searchproviders")
          }
        >
          {user === "jovem"
            ? "Orientações para empreender"
            : "Lista de Fornecedores"}
        </Button>

        <Space></Space>

        <Button
          shadow
          background={user === "jovem" ? "#4FC18E" : "#4F91C1"}
          width="100%"
          onClick={
            user === "jovem" ? navigateTo("turnsmei") : navigateTo("createbid")
          }
        >
          {user === "jovem"
            ? "Saiba como virar MEI"
            : "Criar licitação de produto"}
        </Button>
      </Form>

      <Applogo
        src={user === "jovem" ? logoJovem : logoFornecedores}
        alt="logoFornecedores"
      ></Applogo>
    </Container>
  );
};

export default ProvidersOptions;
