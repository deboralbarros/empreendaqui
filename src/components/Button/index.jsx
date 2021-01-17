import { Container } from "./style";

const Button = ({
  children,
  onClick,
  background,
  shadow,
  width,
  border,
  color = "#fff",
}) => {
  return (
    <Container
      onClick={onClick}
      background={background}
      shadow={shadow}
      width={width}
      color={color}
      border={border}
    >
      {children}
    </Container>
  );
};

export default Button;
