import { useHistory } from "react-router-dom";

import { Container } from "./style";

import Logo from "../../images/logo_full_transparente.png";

const InitialPage = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/selectProfile");
  }, 2000);

  return (
    <Container>
      <img src={Logo} alt="EmpreendAqui" />
    </Container>
  );
};

export default InitialPage;
