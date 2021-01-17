import { useHistory } from "react-router-dom";

import { Container, Form, Category, Label, Select } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const SearchProviders = () => {
  const history = useHistory();

  const navigateToProvidersList = (e) => {
    e.preventDefault();

    history.push("/providerslist");
  };

  return (
    <Container>
      <Header title="Escolha o tipo de fornecedor" />

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
          background="#4FC18E"
          width="80%"
          onClick={navigateToProvidersList}
          shadow
        >
          Lista de fornecedores
        </Button>
      </Form>
    </Container>
  );
};

export default SearchProviders;
