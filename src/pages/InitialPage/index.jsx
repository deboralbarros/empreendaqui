import { useHistory } from "react-router-dom";

import { Container } from "./style";

import Logo from "../../images/logo_full_transparente.png";

const InitialPage = () => {
  const history = useHistory();

  const user = localStorage.getItem("user");

  setTimeout(() => {
    if (user) {
      history.push("/home");
    } else {
      history.push("/selectprofile");
    }
  }, 2000);

  return (
    <Container>
      <img src={Logo} alt="EmpreendAqui" />
    </Container>
  );
};

export default InitialPage;
