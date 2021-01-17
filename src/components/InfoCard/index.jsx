import { useState } from "react";
import {
  Container,
  Info,
  Title,
  Content,
  Date,
  Contact,
  Price,
  Text,
} from "./style";

import { FiPhone } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

import Button from "../Button";

const InfoCard = ({ user }) => {
  const [send, setSend] = useState(false);

  return (
    <Container>
      <Info>
        <Title>{user === "empresa" ? "Fornecedor" : "Cliente"}</Title>
        <Content>Atacadao 94 LTDA</Content>
      </Info>

      <Date>Entrega dia 16/01/2021</Date>

      <Info>
        <Title>Produto</Title>
        <Content>Pães Hot Dog</Content>
      </Info>

      <Contact>time94@email.com.ccr</Contact>

      {user === "empresa" ? (
        <Price>R$ 1,00/un</Price>
      ) : (
        <>
          <Date>Valor:</Date>
          <Price border={!send}>R$ 1,00/un</Price>
        </>
      )}

      {!send && (
        <Button
          background={user === "empresa" ? "#4FC18E" : "#DE6767"}
          width="80%"
          onClick={() => user === "fornecedor" && setSend(!send)}
        >
          {user === "empresa" && <FiPhone color="#fff" />}
          {user === "empresa" ? "Ligar para fornecedor" : "Enviar proposta"}
        </Button>
      )}
      {user === "fornecedor" && send && (
        <AiOutlineCheck color="#66BD74" fontSize={32} />
      )}
      {user === "fornecedor" && send && (
        <>
          <Text normal>Sua proposta foi enviada com sucesso</Text>
          <Text>Aguarde a empresa entrar em contato</Text>
        </>
      )}
    </Container>
  );
};

export default InfoCard;
