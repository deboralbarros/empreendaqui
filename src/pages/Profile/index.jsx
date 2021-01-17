import { useHistory } from "react-router-dom";

import { Container, Form, Category, Label, Select } from "./style";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Profile = () => {
    const history = useHistory();

    const navigateToHomeProvider = (e) => {
        e.preventDefault();
    
        history.push("/homeprovider");
    };
    

    return (
        <Container>
            <Header
                title="PERFIL"
            />
                <Form>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Editar Perfil
                </Button>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Documentos
                </Button>
                <Button background="transparent" color="rgba(0, 0, 0, 1)">
                    Ajuda
                </Button>
                <Button
                    background="transparent"
                    color="rgba(0, 0, 0, 1)"
                    onClick={navigateToHomeProvider}
                >
                    Log Off
                </Button>
            </Form>
        </Container>
    );
};

export default Profile;
