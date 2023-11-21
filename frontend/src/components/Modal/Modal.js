import { DivContainer, DivCard, ImgLogo, CaixaContainer, Caixa2, H1Container2, DivTitulo, SectionCadastro, DivFormulario, DivEnter, Button2 } from './styled';
import fidodido from '../../assets/fidodido.png';
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from 'react';


function Modal({ isOpen, setModalOpen }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setName] = useState("");
  const [Erro, setError] = useState('')
  // const [profissao, setProfissao] = useState("");
  // const [categoria, setCategoria] = useState("");

  const navigate = useNavigate()

  const goToHome = () => {

    navigate("/home");

    window.location.reload();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      'email':email,
      'password':password,
      'name':nome
    };
    // console.log(data)
    const response = await api.post('user/create', data);
    console.log(response.data.data[0])
    alert("Usuário criado com sucesso!");
    goToHome()

  };



  if (isOpen) {
    return (
      <>
        <DivContainer>
          <ImgLogo src={fidodido} alt="Logo" onClick={setModalOpen} />
          <DivCard>
            <SectionCadastro>
              <DivTitulo>
                <H1Container2>
                  Cadastro
                </H1Container2>
              </DivTitulo>

              <DivFormulario>
                <Caixa2>
                  <CaixaContainer
                    type="text"
                    value={nome}
                    placeholder="Nome de Usuário"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Caixa2>
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
                {/* <Caixa2>
                  <CaixaContainer
                    placeholder="Categoria"
                    type="text"
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    
                  />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer
                    placeholder="Profissão"
                    type="text"
                    id="profissao"
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                  />
                </Caixa2> */}

                <DivEnter>
                  <Button2 onClick={handleSubmit} type="submit"> Cadastrar </Button2>
                </DivEnter>
              </DivFormulario>

            </SectionCadastro>

          </DivCard>
        </DivContainer>
      </>
    );
  }

  return null

};

export default Modal;

