import { Container, Title, P } from "./style";

import Header from "../../components/Header";

const Tips = () => {
  const user = "jovem";

  return (
    <Container background={user}>
      <Header title="Dicas e estratégias" />
      <Title>Como começar seu negócio?</Title>
      <P>
        É importante questionar o quanto a execução dos pontos do programa
        possibilita uma melhor visão global das formas de ação. O incentivo ao
        avanço tecnológico, assim como a necessidade de renovação processual
        cumpre um papel essencial na formulação do fluxo de informações. O
        cuidado em identificar pontos críticos no consenso sobre a necessidade
        de qualificação é uma das consequências do processo de comunicação como
        um todo.
      </P>
    </Container>
  );
};

export default Tips;
