import Header from "../../components/Header/Header"
import { DivRight, DivLeft, BodyContainer, H1Container, H5Container, H5Container2, H5Container3, DivCard, SectionContainer, CaixaEmailContainer, Caixa, Button, ImgMeninaFrente, EnvelopeEmail, FotoTras} from './styled';
import ImgMeninaFront from "../../assets/ImgMeninaFrente.jpg"
import envelope from "../../assets/envelope.png"
import fototras from "../../assets/Fototras.png"

function Home() {
  return (
    <>
      <Header />

      <BodyContainer>
      <FotoTras src={fototras} alt="Fototras" />
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
              <Button>Submit</Button>
            </Caixa>
          </DivLeft>


          <DivRight>
              <DivCard>
                <ImgMeninaFrente src={ImgMeninaFront} alt="FotoPaginaInicial" />
                <H5Container2> Maya Ribeiro </H5Container2>
                <H5Container3> Professora de educaçao infantil </H5Container3>
              </DivCard>
          </DivRight>

        </SectionContainer>
      </BodyContainer>
    </>
  )
}

export default Home