import { DivContainer, DivCard, ImgLogo, SectionCadastro, H1Container2, DivTitulo, Caixa2, DivFormulario, CaixaContainer, DivEnter, Button2 } from './styled';
import fidodido from '../../assets/fidodido.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


function ModalLogin({ isOpen, setModalLoginOpen }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signed = false;

    const navigate = useNavigate()
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
        try{
            console.log(data);
            const response = await api.post('/auth/login', data);
    
            console.log(response.data);
    
            if (response.data.success) {
                console.log(response.data.data);
                alert('VERIFICAR ID USUARIO ' + response.data.data.id)
                localStorage.setItem('id', response.data.data.id)
                localStorage.setItem("password", JSON.stringify(response.data.data.password));
                localStorage.setItem("email", JSON.stringify(response.data.data.email));
                localStorage.setItem("nome", JSON.stringify(response.data.data.name));
                alert('Login concluído');

                // redireciona para home
                goToHome()
            } else {
                alert('Não foi possível entrar');
            }     
    
        } catch(error){
            console.log(error)
        }
    }

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
                                    <Button2 type="submit" onClick={handleSubmit}> Entrar </Button2>
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

