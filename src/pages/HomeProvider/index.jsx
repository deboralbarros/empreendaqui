import { useHistory } from "react-router-dom";

import { Container, Form, Label, Select, Title, Applogo } from "./style";

import Button from "../../components/Button";

import logoHome from '../../images/Group1.png';

const HomeProvider = () => {
    const history = useHistory();

    const navigateToProvidersOptions = (e) => {
        e.preventDefault();

        history.push("/providersoptions");
    };

    const navigateToOptions = (e) => {
        e.preventDefault();

        history.push("/options");
    };

    const navigateToLogin = (e) => {
        e.preventDefault();

        history.push("/login");
    };

    return (
        <Container>
            <Form>

                <Title>
                    NOME-DA-EMPRESA
                </Title>

            
                <Button
                    background="#4FC18E"
                    width="80%"
                    onClick={navigateToProvidersOptions}
                >
                    Procurar Fornecedores
                </Button>
            </Form>
                
            <Applogo 
                src={logoHome} alt="logoHome"
            >

            </Applogo>
        </Container>
    );
};

export default HomeProvider;