import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Label, Category, Form, Input } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Login = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    setUser(localUser);
  }, [user]);

  const history = useHistory();

  const backToSelectProfile = () => {
    history.push("/selectprofile");
  };

  const navigateToHome = (e) => {
    e.preventDefault();

    history.push("/home");
  };

  return (
    <Container>
      <Header
        title={
          user === "jovem"
            ? "Login como Pessoa Física"
            : user === "empresa"
            ? "Login como Empresa"
            : "Login como Fornecedor"
        }
        onBack={backToSelectProfile}
      />

      <Form>
        {user === "jovem" && (
          <>
            <Category>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" />
            </Category>

            <Category>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" />
            </Category>

            <Button
              width="90%"
              background="#4F91C1"
              shadow
              onClick={(e) => navigateToHome(e)}
            >
              Entrar
            </Button>
            <Button width="90%" background="#4FC18E" shadow>
              Criar nova conta
            </Button>
          </>
        )}
        {user === "empresa" && (
          <>
            <Category>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" />
            </Category>

            <Category>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" />
            </Category>

            <Button
              width="90%"
              background="#4FC18E"
              shadow
              onClick={(e) => navigateToHome(e)}
            >
              Entrar
            </Button>
            <Button width="90%" background="#4F91C1" shadow>
              Criar nova conta
            </Button>
          </>
        )}
        {user === "fornecedor" && (
          <>
            <Category>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" />
            </Category>

            <Category>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" />
            </Category>

            <Button
              width="90%"
              background="#DE6767"
              shadow
              onClick={(e) => navigateToHome(e)}
            >
              Entrar
            </Button>
            <Button width="90%" background="#4F91C1" shadow>
              Criar nova conta
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Login;
