import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Form } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Profile = () => {
  const history = useHistory();

  const navigateToSelectProfile = () => {
    localStorage.clear();

    history.push("/selectprofile");
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <Container background={user}>
      <Header title="PERFIL" />
      <Form>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Editar Perfil
        </Button>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Documentos
        </Button>
        <Button background="transparent" color="rgba(0, 0, 0, 1)">
          Ajuda
        </Button>
        <Button
          background="transparent"
          color="rgba(0, 0, 0, 1)"
          onClick={navigateToSelectProfile}
        >
          Log Off
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
