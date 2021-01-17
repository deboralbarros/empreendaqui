import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Form } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Options = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push("/home");
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <Container background={user}>
      <Header title="CONFIGURAÇÕES" onBack={navigateToHome} />
      <Form>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Configurações do App
        </Button>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Notificações
        </Button>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Tutoriais do App
        </Button>
      </Form>
    </Container>
  );
};

export default Options;
