import { DivContainer, DivCard, ImgLogo, SectionCadastro, H1Container2, DivTitulo, Caixa2, DivFormulario, CaixaContainer, DivEnter, Button2 } from './styled';
import fidodido from '../../assets/fidodido.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";


function ModalLogin({ isOpen, children, setModalLoginOpen }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const signed = false;

    const navigate = useNavigate();

    const goToHome = () => {

        navigate("/home");

        window.location.reload();

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };
        console.log(data);

        const response = await baseUrl.post('auth/login', data)
        console.log(response.data);

        // Reorna da API com as chaves
        if (response.data.success === true) {
            alert("Usuário conectado com sucesso!");

            baseUrl.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.data[0].token}`

            localStorage.setItem("user", JSON.stringify(response.data.data[0].email));
            localStorage.setItem("token", response.data.data[0].token);
            setUser(response.data.data[0])

            //signed = true;

            goToHome()

        } else {
            alert('Num deu!')

        }

    };

    if (isOpen) 
    if (!signed)
    {
        return (
            <>
                <DivContainer>
                    <ImgLogo src={fidodido} alt="Logo" onClick={setModalLoginOpen} />
                    <DivCard>
                        {/* {children} */}
                        <SectionCadastro>
                            <DivTitulo>
                                <H1Container2>
                                    Login
                                </H1Container2>
                            </DivTitulo>

                            <DivFormulario>
                                <Caixa2>
                                    <CaixaContainer
                                        type="text"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Caixa2>
                                <Caixa2>
                                    <CaixaContainer
                                        type="password"
                                        id="senha"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Caixa2>

                                <DivEnter>
                                    <Button2 type="submit" id="submit"> Entrar </Button2>
                                </DivEnter>

                            </DivFormulario>

                        </SectionCadastro>

                    </DivCard>
                </DivContainer>
            </>
        );
    }

    return null

}

export default ModalLogin;

