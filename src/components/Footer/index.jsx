import { useHistory } from "react-router-dom";

import { Container } from "./style";

import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Button from "../Button";

const Footer = ({ history }) => {
  const navigation = useHistory();

  const navigateToTransactionHistory = () => {
    navigation.push("/transactionhistory");
  };

  const navigateToLogin = () => {
    localStorage.setItem("user", "empresa");

    navigation.push("/login");
  };

  return (
    <Container>
      <Button background="transparent" width="20%">
        <MdSettings color="rgba(0, 0, 0, 0.24)" fontSize={32} />
      </Button>

      {history ? (
        <Button
          background="transparent"
          color="rgba(0, 0, 0, 0.24)"
          width="60%"
          onClick={navigateToTransactionHistory}
        >
          Acesse o Histórico
        </Button>
      ) : (
        <Button
          background="transparent"
          color="rgba(0, 0, 0, 0.24)"
          width="60%"
          onClick={navigateToLogin}
        >
          Login como empresa
        </Button>
      )}

      <Button background="transparent" width="20%">
        <CgProfile color="rgba(0, 0, 0, 0.24)" fontSize={32} />
      </Button>
    </Container>
  );
};

export default Footer;
