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

  return (
    <Container>
      <Header title="Contato do Fornecedor" onBack={backToProvidersList} />
      <InfoCard />

      <Button background="transparent" color="rgba(0, 0, 0, 0.22)">
        Tela inicial
      </Button>
    </Container>
  );
};

export default Provider;
