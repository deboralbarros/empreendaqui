import { useHistory } from "react-router-dom";

import { Container, Form, Category, Label, Select } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Options = () => {
    const history = useHistory();

    const navigateToHomeProvider = (e) => {
        e.preventDefault();
    
        history.push("/homeprovider");
    };
    

    return (
        <Container>
            <Header
                title="CONFIGURAÇÕES"
            />
                <Form>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Configurações do App
                </Button>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Notificações
                </Button>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Tutoriais do App
                </Button>
            </Form>
        </Container>
    );
};

export default Options;
