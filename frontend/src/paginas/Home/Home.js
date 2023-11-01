import Header from "../../components/Header/Header"
import { DivRight, DivLeft, BodyContainer, H1Container, H5Container, H5Container2, H5Container3, DivCard, SectionContainer, CaixaEmailContainer, Caixa, Button, ImgMeninaFrente, EnvelopeEmail, CaixaContainer, Caixa2, H1Container2, DivTitulo, SectionCadastro, DivFormulario, DivEnter, Button2, DivCheck, InputCheckBox, Label, DivLogin, H6Container1, ButtonLogin, H6Container3, SectionSujestoes, H6Sujestoes, DivCima, VideoCard, DivTitulos, H3Titulo, H5Classificacao } from './styled';
import ImgMeninaFront from "../../assets/ImgMeninaFrente.jpg"
import envelope from "../../assets/envelope.png"
import { useState } from 'react';
import Modal from "../../components/Modal/Modal"
import ModalLogin from "../../components/ModalLogin/ModalLogin"
import imagemdesenho1 from "../../assets/imagemdesenho1.jpg"
import imagemdesenho2 from "../../assets/imagemdesenho2.jpg"
import imagemdesenho3 from "../../assets/imagemdesenho3.jpg"
import imagemdesenho4 from "../../assets/imagemdesenho4.jpg"
import imagemdesenho5 from "../../assets/imagemdesenho5.jpg"
import imagemdesenho6 from "../../assets/imagemdesenho6.jpg"
import imagemdesenho7 from "../../assets/imagemdesenho7.jpg"
import imagemdesenho8 from "../../assets/imagemdesenho8.jpg"
import imagemdesenho9 from "../../assets/imagemdesenho9.jpg"
import { useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { Categoria, Profissao } from "../../components/Header/styled";


function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const mudaState = () => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState("");
  const [profissao, setProfissao] = useState("");

  useEffect(() => {
    // Verifique se existem valores no localStorage e carregue-os
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");
    const savedEmail = localStorage.getItem("email");
    const savedCategoria = localStorage.getItem("categoria");
    const savedProfissao = localStorage.getItem("profissao");

    if (savedName) {
      setName(savedName);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedCategoria) {
      setCategoria(savedCategoria);
    }
    if (savedProfissao) {
      setProfissao(savedProfissao);
    }

  }, []);

  useEffect(() => {
    // Salve os valores das variáveis no localStorage sempre que houver alterações
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    localStorage.setItem("categoria", Categoria);
    localStorage.setItem("profissao", Profissao);
  }, [name, password, email]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name,
        password,
        email,
        Categoria,
        Profissao
      };
      await api.post("/user/create", data);
      alert("Usuário criado com sucesso!");
      navigate("/home")
    };



  return (
    <>
      <Header />

      <BodyContainer>
        <SectionContainer>
          <DivLeft>

            <H1Container>
              Faça comentários nos vídeos que voce assiste
            </H1Container>


            <H5Container>
              Para que voce possa fazer comentários nos vídeos, faça seu
              cadastro no site, e também veja outros pais e professores que
              comentam suas indicaçoes e interagem com as publicações.
            </H5Container>

            <Caixa>
              <EnvelopeEmail src={envelope} alt="envelopeemail" />
              <CaixaEmailContainer placeholder="exemplo@gmail.com" />
              <Button onClick={() => setOpenModal(true)}> Submit </Button>
              <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
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
                            id="usuario"
                            value={name}
                            placeholder="Nome de Usuário"/>
                </Caixa2>
                <Caixa2>
                  <CaixaContainer 
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            // onChange = {(e) => setEmail(e.target.value)}
                  />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer                             
                            type="password"
                            id="senha"
                            placeholder="Senha"
                            value={password} 
                            // onChange = {(e) => setPassword(e.target.value)}
                            />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer 
                            placeholder="Categoria" 
                            type="text"
                            id="categoria"
                            value={categoria}
                  />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer 
                            placeholder="Profissão" 
                            type="text"
                            id="profissao"
                            value={profissao}
                            />
                </Caixa2>

                <DivEnter>
                  <Button2 onClick={handleSubmit} type="submit"> Entrar </Button2>
                </DivEnter>

                      <DivCheck>
                        <Label>
                          <InputCheckBox
                              type="checkbox"
                              checked={isChecked}
                              onChange= {mudaState}
                          />  Se lembre de mim
                        </Label>
                      </DivCheck>

                  </DivFormulario>

              </SectionCadastro>

              </Modal>
            </Caixa>

            <DivLogin>
                <H6Container1>
                    ja possui cadastro? Faça seu
                </H6Container1>

                
                <ButtonLogin onClick={() => setOpenModalLogin(true)}> Login </ButtonLogin>
              <ModalLogin isOpen={openModalLogin} setModalLoginOpen={() => setOpenModalLogin(!openModalLogin)}>
              <SectionCadastro>
                <DivTitulo>
                    <H1Container2>
                        cristinaferreira
                    </H1Container2>
                </DivTitulo>

                <DivFormulario>
                <Caixa2>
                  <CaixaContainer type="text"
                            id="usuario"
                            placeholder="Email"
                            // value={email}
                            // onChange = {(e) => setEmail(e.target.value)} 
                            />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer   
                            type="password"
                            id="senha"
                            placeholder="Senha"
                            // value={password} 
                            // onChange = {(e) => setPassword(e.target.value)}   
                  />
                </Caixa2>

                <DivEnter>
                  <Button2 type="submit" id="submit"> Entrar </Button2>
                </DivEnter>

                      <DivCheck>
                        <Label>
                          <InputCheckBox
                              type="checkbox"
                              checked={isChecked}
                              onChange= {mudaState}
                          />  Esqueci minha senha
                        </Label>
                      </DivCheck>

                  </DivFormulario>

              </SectionCadastro>

              </ModalLogin>

                <H6Container3>
                    aqui
                </H6Container3>
            </DivLogin>

          </DivLeft>


          <DivRight>
              <DivCard>
                <ImgMeninaFrente src={ImgMeninaFront} alt="FotoPaginaInicial" />
                <H5Container2> Maya Ribeiro </H5Container2>
                <H5Container3> Professora de educaçao infantil </H5Container3>
              </DivCard>
          </DivRight>

        </SectionContainer>

        <DivCima>
            <H6Sujestoes>
              Sujestões
            </H6Sujestoes>
        </DivCima>

        <SectionSujestoes>
          <DivTitulos>
            <VideoCard src={imagemdesenho1} alt="desenho1" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho2} alt="desenho2" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho3} alt="desenho3" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho4} alt="desenho4" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho5} alt="desenho5" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho6} alt="desenho6" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho7} alt="desenho7" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho8} alt="desenho8" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>

          <DivTitulos>
            <VideoCard src={imagemdesenho9} alt="desenho9" />
            <H3Titulo></H3Titulo>
            <H5Classificacao></H5Classificacao>
          </DivTitulos>
        </SectionSujestoes>
      </BodyContainer>
    </>
  )
}

export default Home;
