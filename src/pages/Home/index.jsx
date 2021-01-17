import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Title, Applogo } from "./style";

import Logo from "../../images/nome_preto.png";

import Button from "../../components/Button";
import Footer from "../../components/Footer";

import logoHome from "../../images/Group1.png";
import fornecedor from "../../images/Group3.png";
import jovem from "../../images/Group2.png";

const Home = () => {
  const history = useHistory();

  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    setUser(localUser);
  }, [user]);

  const navigateToProvidersOptions = () => {
    history.push("/providersoptions");
  };

  return (
    <Container background={user}>
      <Title>
        <img src={Logo} alt="EmpreendAqui" />
      </Title>

      <Button
        background={
          user === "empresa"
            ? "#4FC18E"
            : user === "fornecedor"
            ? "#DE6767"
            : "#4F91C1"
        }
        width="80%"
        onClick={() =>
          user !== "fornecedor"
            ? navigateToProvidersOptions()
            : history.push("/searchbid")
        }
        shadow
      >
        {user === "empresa"
          ? "Procurar Fornecedores"
          : user === "fornecedor"
          ? "Encontrar Clientes"
          : "Comece seu negócio"}
      </Button>

      <div>
        <Applogo
          src={
            user === "empresa"
              ? logoHome
              : user === "fornecedor"
              ? fornecedor
              : jovem
          }
          alt="logoHome"
        ></Applogo>

        <Footer
          history={
            user === "fornecedor" ? true : user === "empresa" ? true : false
          }
        />
      </div>
    </Container>
  );
};

export default Home;
