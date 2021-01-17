import { useHistory } from "react-router-dom";

import { Container, List } from "./style";

import Header from "../../components/Header";
import ProviderCard from "../../components/ProviderCard";

const ProvidersList = () => {
  const history = useHistory();

  const backToSearchProviders = () => {
    history.push("/searchproviders");
  };

  return (
    <Container>
      <Header title="Lista de Fornecedores" onBack={backToSearchProviders} />
      <List>
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </List>
    </Container>
  );
};

export default ProvidersList;
