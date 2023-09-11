import Header from "../../components/Header/Header"
import { DivRight, DivLeft, BodyContainer, H1Container, H5Container, H5Container2, H5Container3, DivCard, SectionContainer, CaixaEmailContainer, Caixa, Button, ImgMeninaFrente, EnvelopeEmail, CaixaContainer, Caixa2, H1Container2, DivTitulo, SectionCadastro, DivFormulario, DivEnter, Button2, DivCheck, InputCheckBox, Label, DivLogin, H6Container1, ButtonLogin, H6Container3, SectionSujestoes, H6Sujestoes, DivCima, VideoCard, DivTitulos, H3Titulo, H5Classificacao } from './styled';
import ImgMeninaFront from "../../assets/ImgMeninaFrente.jpg"
import envelope from "../../assets/envelope.png"
// import fototras from "../../assets/Fototras.png"
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
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const mudaState = () => {
    setIsChecked(!isChecked);
  };

  // const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  
  //   const navigate = useNavigate()
  
  //   const goToGraphicWeek = () => {
  //     navigate('/Perfil')
  //   }
  
  //   const hadleSubmit = (e) => {
  //     e.preventDefault()
  
  //     const credentials = { email, password } 
      
  //     axios
  //     .post('http://localhost:8000/login', credentials, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     })
  //     .then(response => {
  //       alert(response.data.message)
  //       goToGraphicWeek()
  //     })
  //     .catch(error => console.log(error))
      
  //   };


  return (
    <>
      <Header />

      <BodyContainer>
      {/* <FotoTras src={fototras} alt="Fototras" /> */}
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
                  <CaixaContainer placeholder="Nome de Usuário"/>
                </Caixa2>
                <Caixa2>
                  <CaixaContainer placeholder="E-mail"
                                  // type="text"
                                  // id="usuario"
                                  // value={email}
                                  // onChange = {(e) => setEmail(e.target.value)}
                                  />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer placeholder="Senha"
                                  // type="password"
                                  // id="senha"
                                  // value={password} 
                                  // onChange = {(e) => setPassword(e.target.value)} 
                                  />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer placeholder="Categoria" />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer placeholder="Profissão" />
                </Caixa2>
                </DivFormulario>

                <DivEnter>
                  <Button2 type="submit" id="submit"> Entrar </Button2>
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
                  <CaixaContainer placeholder="Senha" />
                </Caixa2>
                <Caixa2>
                  <CaixaContainer placeholder="Confirmar Senha" />
                </Caixa2>
                </DivFormulario>

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
            <H3Titulo>,jhvbuvukg</H3Titulo>
            <H5Classificacao>lihbliy</H5Classificacao>
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
