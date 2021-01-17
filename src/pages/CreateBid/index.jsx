import { useHistory } from "react-router-dom";

import { Container, Category, Label, Select, Form, Input } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const CreateBid = () => {
  const history = useHistory();

  const backToProviderOptions = () => {
    history.push("/providersoptions");
  };

  const navigateToHome = (e) => {
    e.preventDefault();

    history.push("/home");
  };

  return (
    <Container>
      <Header
        title="Licitação para Fornecedor"
        onBack={backToProviderOptions}
      />
      <Form>
        <Category>
          <Label htmlFor="category">Categoria</Label>
          <Select id="category">
            <option>Selecione aqui</option>
          </Select>
        </Category>

        <Category>
          <Label htmlFor="product">Produto</Label>
          <Input id="product" />
        </Category>

        <Category>
          <Label htmlFor="amount">Quantidade</Label>
          <Input id="amount" />
        </Category>

        <Button
          background="#4FC18E"
          width="80%"
          shadow
          onClick={navigateToHome}
        >
          Criar Licitação
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBid;
