import { useHistory } from "react-router-dom";

import { Container, List } from "./style";

import Header from "../../components/Header";
import ProviderCard from "../../components/ProviderCard";
import Button from "../../components/Button";

const ProvidersList = () => {
  const history = useHistory();

  const backToSearchProviders = () => {
    history.push("/searchproviders");
  };

  const navigateToProvider = () => {
    history.push("/provider");
  };

  const button = (
    <Button background="#4FC18E" width="100%" onClick={navigateToProvider}>
      Contatar fornecedor
    </Button>
  );

  return (
    <Container>
      <Header title="Lista de Fornecedores" onBack={backToSearchProviders} />
      <List>
        <ProviderCard button={button} />
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

export default ProvidersList;
