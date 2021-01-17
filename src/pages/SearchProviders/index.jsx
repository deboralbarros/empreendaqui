import { useHistory } from "react-router-dom";

import { Container, Form, Category, Label, Select } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const SearchProviders = () => {
  const history = useHistory();

  const navigateToProvidersList = (e) => {
    e.preventDefault();

    history.push("/providerslist");
  };

  const user = "fornecedor";

  return (
    <Container background={user}>
      <Header
        title={
          user === "empresa"
            ? "Escolha o tipo de fornecedor"
            : "Escolha o tipo de licitação"
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
