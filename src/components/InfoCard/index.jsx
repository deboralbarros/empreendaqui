import { Container, Info, Title, Content, Date, Contact, Price } from "./style";

import { FiPhone } from "react-icons/fi";

import Button from "../Button";

const InfoCard = () => {
  return (
    <Container>
      <Info>
        <Title>Fornecedor</Title>
        <Content>Atacadao 94 LTDA</Content>
      </Info>

      <Date>Entrega dia 16/01/2021</Date>

      <Info>
        <Title>Produto</Title>
        <Content>Pães Hot Dog</Content>
      </Info>

      <Contact>time94@email.com.ccr</Contact>

      <Price>R$ 1,00/un</Price>

      <Button background="#4FC18E" width="80%">
        <FiPhone color="#fff" />
        Ligar para fornecedor
      </Button>
    </Container>
  );
};

export default InfoCard;
