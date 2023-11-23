import Header from "../../components/Header/Header"
import { DivRight, DivLeft, BodyContainer, H1Container, H5Container, H5Container2, H5Container3, DivCard, SectionContainer, CaixaEmailContainer, Caixa, Button, ImgMeninaFrente, EnvelopeEmail, DivLogin, H6Container1, ButtonLogin, H6Container3, SectionSujestoes, H6Sujestoes, DivCima, VideoCard, DivTitulos, H3Titulo, H5Classificacao, Imgtras } from './styled';
import ImgMeninaFront from "../../assets/ImgMeninaFrente.jpg"
import fototras from "../../assets/fototras.jpg"
import envelope from "../../assets/envelope.png"
import { useContext, useState } from 'react';
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
import { api, baseUrl } from "../../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home() {

  const [openModal, setOpenModal] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  // const {selectedPostId} = useContext(GlobalStateContext)

  const navigate = useNavigate()

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
              </Modal>
            </Caixa>

            <DivLogin>
                <H6Container1>
                    ja possui cadastro? Faça seu
                </H6Container1>

                
                <ButtonLogin onClick={() => setOpenModalLogin(true)}> Login </ButtonLogin>
              <ModalLogin isOpen={openModalLogin} setModalLoginOpen={() => setOpenModalLogin(!openModalLogin)}>
            
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
