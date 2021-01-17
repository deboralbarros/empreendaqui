import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Form, Category, Label, Select } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const SearchProviders = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    setUser(localUser);
  }, [user]);

  const history = useHistory();

  const navigateToProvidersList = (e) => {
    e.preventDefault();

    if (user === "empresa") {
      history.push("/providerslist");
    } else {
      history.push("/bidlist");
    }
  };

  return (
    <Container background={user}>
      <Header
        title={
          user === "empresa"
            ? "Escolha o tipo de fornecedor"
            : "Escolha o tipo de licitação"
        }
        onBack={() =>
          user !== "fornecedor"
            ? history.push("/providersoptions")
            : history.push("/home")
        }
      />

      <Form>
        <Category>
          <Label htmlFor="category">Categoria</Label>
          <Select id="category">
            <option>Selecione aqui</option>
          </Select>
        </Category>

        <Category>
          <Label htmlFor="uf">Estado</Label>
          <Select id="uf">
            <option>Selecione aqui</option>
          </Select>
        </Category>

        <Category>
          <Label htmlFor="city">Cidade</Label>
          <Select id="city">
            <option>Selecione aqui</option>
          </Select>
        </Category>

        <Button
          background={user === "empresa" ? "#4FC18E" : "#DE6767"}
          width="80%"
          onClick={navigateToProvidersList}
          shadow
        >
          {user === "empresa" ? "Lista de fornecedores" : "Lista de Licitações"}
        </Button>
      </Form>
    </Container>
  );
};

export default SearchProviders;
