import { useHistory } from "react-router-dom";

import { Container, Title, ButtonsContainer } from "./style";

import Button from "../../components/Button";

import image from "../../images/Group17.png";

const SelectProfile = () => {
  const history = useHistory();

  const navigateToLogin = (user) => {
    localStorage.setItem("user", user);

    history.push("/login");
  };

  return (
    <Container>
      <Title>Você é:</Title>

      <ButtonsContainer>
        <Button
          background="#4F91C1"
          width="80%"
          shadow
          onClick={() => navigateToLogin("jovem")}
        >
          Pessoa Física
        </Button>
        <Button
          background="#4FC18E"
          width="80%"
          shadow
          onClick={() => navigateToLogin("empresa")}
        >
          Empresa
        </Button>
        <Button
          background="#DE6767"
          width="80%"
          shadow
          onClick={() => navigateToLogin("fornecedor")}
        >
          Fornecedor
        </Button>
      </ButtonsContainer>

      <img src={image} alt="Login" />
    </Container>
  );
};

export default SelectProfile;
