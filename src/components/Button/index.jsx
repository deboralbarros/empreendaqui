import { Container } from "./style";

const Button = ({
  children,
  onClick,
  background,
  shadow,
  width,
  color = "#fff",
}) => {
  return (
    <Container
      onClick={onClick}
      background={background}
      shadow={shadow}
      width={width}
      color={color}
    >
      {children}
    </Container>
  );
};

export default Button;
