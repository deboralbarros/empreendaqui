import { Container, Title, P } from "./style";

import Header from "../../components/Header";

import Video from "../../images/video1.png";

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
      <img src={Video} alt="Como começar o seu negócio?" />
      <P>
        Nunca é demais lembrar o peso e o significado destes problemas, uma vez
        que a percepção das dificuldades faz parte de um processo de
        gerenciamento dos métodos utilizados na avaliação de resultados. Assim
        mesmo, o novo modelo estrutural aqui preconizado aponta para a melhoria
        do remanejamento dos quadros funcionais. A certificação de metodologias
        que nos auxiliam a lidar com o acompanhamento das preferências de
        consumo ainda não demonstrou convincentemente que vai participar na
        mudança dos níveis de motivação departamental.
      </P>
    </Container>
  );
};

export default Tips;
