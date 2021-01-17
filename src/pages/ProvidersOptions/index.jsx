import { useHistory } from "react-router-dom";

import { Container, Form, Label, Select, Title, Applogo, Space } from "./style";

import Button from "../../components/Button";

import logoFornecedores from "../../images/GroupFornecedores.png";

const ProvidersOptions = () => {
  const history = useHistory();

  const navigateToSearchProviders = (e) => {
    e.preventDefault();

    history.push("/searchproviders");
  };

  const navigateToCreateBid = (e) => {
    e.preventDefault();

    history.push("/createbid");
  };

  return (
    <Container>
      <Form>
        <Title>Fornecedores</Title>

        <Button
          background="#4FC18E"
          width="80%"
          onClick={navigateToSearchProviders}
        >
          LISTA DE FORNECEDORES
        </Button>

        <Space></Space>

        <Button background="#4FC18E" width="80%" onClick={navigateToCreateBid}>
          CRIAR PROCURA DE PRODUTO
        </Button>
      </Form>

      <Applogo src={logoFornecedores} alt="logoFornecedores"></Applogo>
    </Container>
  );
};

export default ProvidersOptions;
