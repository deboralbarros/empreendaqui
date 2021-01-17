import { Container } from "./style";

const Button = ({ children, onClick, background, shadow, width }) => {
  return (
    <Container
      onClick={onClick}
      background={background}
      shadow={shadow}
      width={width}
    >
      {children}
    </Container>
  );
};

export default Button;
