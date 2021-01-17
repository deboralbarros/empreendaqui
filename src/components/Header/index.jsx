import { Container, Title, Button } from "./style";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ title, onBack }) => {
  return (
    <Container>
      <Button onClick={onBack} aria-label="Voltar">
        <IoIosArrowBack
          color="rgba(0, 0, 0, 0.22)"
          fontSize={32}
          fontWeight={500}
          onClick={onBack}
        />
      </Button>
      <Title>{title}</Title>
      <div />
    </Container>
  );
};

export default Header;
