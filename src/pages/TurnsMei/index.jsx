import { Container, Title, P, Link } from "./style";

import Header from "../../components/Header";

import Video from "../../images/video2.png";

const TurnsMei = () => {
  const user = "jovem";

  return (
    <Container background={user}>
      <Header title="Dicas e estratégias" />
      <Title>Como se tonar um MEI</Title>
      <P>
        O que temos que ter sempre em mente é que o desenvolvimento contínuo de
        distintas formas de atuação acarreta um processo de reformulação e
        modernização de alternativas às soluções ortodoxas. As experiências
        acumuladas demonstram que o fenômeno da Internet causa impacto indireto
        na reavaliação das posturas dos órgãos dirigentes com relação às suas
        atribuições. Acesse o link a baixo para começar o seu cadastro de MEI:
      </P>
      <Link>
        https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei
      </Link>
      <img src={Video} alt="Como começar o seu negócio?" />
    </Container>
  );
};

export default TurnsMei;
