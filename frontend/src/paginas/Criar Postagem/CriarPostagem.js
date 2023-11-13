import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { BackArrow, Card1, Drop, Card2, CardContainer, H3container1, H1conteiner2, CenterDiv, DropFileHere, LeftDiv, MainContent, PageWrapper, RightDiv, Image, TextContainer1, TextContainer2 } from "./styled";
// import profile from "../../assets/fotoPerfil.jpg"
// import drophere from "../../assets/drophere.png"
import { useEffect } from "react";



function CriarPostagem() {
    const navigate = useNavigate()
  
    const goToPost = () => {
    navigate('/post')
    }

    useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
    },[navigate])
    return (
        <>
         <Header/>
         <PageWrapper>
    
        <MainContent>
          <LeftDiv>
            <BackArrow>&#8592;</BackArrow>
          </LeftDiv>

          <CenterDiv>
            {/* <Image src={profile} alt="Imagem de perfil" /> */}
          </CenterDiv>

          <RightDiv>
            <p>Crie sua própria postagem!</p>
          </RightDiv>
        </MainContent>

        <CardContainer>
            <Card1>
                <H3container1> Escreva o titulo da sua postagem </H3container1>
                <TextContainer1 placeholder="Escreva um titulo para a sua postagem"/>
            </Card1>
            <Card2>
                <H1conteiner2>Escreva um texto para a sua postagem</H1conteiner2>
                <TextContainer2 placeholder="Escreva um titulo para a sua postagem"/>
            </Card2>
        </CardContainer>

        <DropFileHere>
            {/* <Drop src={drophere} alt="imagemdrop" /> */}
            Drop file here
        </DropFileHere>

      </PageWrapper>
        </>
    ) 
    }

export default CriarPostagem;
