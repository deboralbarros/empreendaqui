import { useHistory } from "react-router-dom";

import { Container, List } from "./style";

import Header from "../../components/Header";
import ProviderCard from "../../components/ProviderCard";
import Button from "../../components/Button";

const ProvidersList = () => {
  const history = useHistory();

  const user = "fornecedor";

  const backToSearchProviders = () => {
    if (user === "empresa") {
      history.push("/searchproviders");
    } else {
      history.push("/searchbid");
    }
  };

  const navigateToProvider = () => {
    if (user === "empresa") {
      history.push("/provider");
    } else {
      history.push("/customer");
    }
  };

  const button = (
    <Button
      background={user === "empresa" ? "#4FC18E" : "#DE6767"}
      width="100%"
      onClick={navigateToProvider}
    >
      {user === "empresa" ? "Contatar fornecedor" : "Fazer Oferta"}
    </Button>
  );

  return (
    <Container background={user}>
      <Header
        title={
          user === "empresa" ? "Lista de Fornecedores" : "Lista de Licitações"
        }
        onBack={backToSearchProviders}
      />
      <List>
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
        <ProviderCard button={button} user={user} />
      </List>
    </Container>
  );
};

export default ProvidersList;
