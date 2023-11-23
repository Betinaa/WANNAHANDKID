import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { Card1, Card3, Card2, Card4, CardContainer, H3container1, H1conteiner2, CenterDiv, DropFileHere, LeftDiv, MainContent, PageWrapper, RightDiv, Image, TextContainer1, TextContainer2, TextContainer4, FotoEditarPerfil, TituloH2, CardContainer2, Criacaodopost, H3container2, Finalizacao, ButtonCriar, Voltar } from "./styled";
import { useEffect } from "react";
import fidodido2 from "../../assets/fidodido2.jpg"
import dropfileshere from "../../assets/dropfileshere.png"
import { useState } from 'react';
import axios from "axios";
import { api } from "../../services/api";

function CriarPostagem() {
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState("");
  const [legenda, setLegenda] = useState("");
  const [tema, setTema] = useState("");
  const [criador, setCriador] = useState("");
  const [video, setVideo] = useState("");
  const id = localStorage.getItem("id")
  const [preview, setPreview] = useState("");

    const goToVisualizar = () => {

        navigate("/visualizarpublicacao");
    
        window.location.reload();
    };

  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  
  const handleClick = () => {
    let formData = new FormData();

    
      formData.append('titulo', titulo);
      formData.append('tema', tema);
      formData.append('legenda', legenda);
      formData.append('criador', criador);
      formData.append('file', video);
      formData.append('user_id', id);
      
    console.log(video)
    console.log(formData)
    console.log(id)

    axios.post(`http://localhost:3008/api/post/post/create`, formData)
      .then(function (response) {
        alert("deu certomeu")
        console.log(response)
        goToVisualizar()
      })
      .catch(function (error) {
        alert("deu errado")
        console.log(error)
      });

    }
  

  return (
    <>
      <Header />
      <PageWrapper>

        <MainContent>
          <LeftDiv>
          </LeftDiv>

          <CenterDiv>
            <FotoEditarPerfil src={fidodido2} alt="Perfil" />
          </CenterDiv>

          <RightDiv>
            <TituloH2> Crie sua própria postagem!</TituloH2>
          </RightDiv>
        </MainContent>

        <Criacaodopost>
          <CardContainer>
            <Card1>
              <H3container1> Escreva o titulo da sua postagem </H3container1>
              <TextContainer1 value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Escreva seu titulo para que o publico possa saber que tematica a sua postagem esta expressando" />
            </Card1>
            <DropFileHere>
              <H3container2> Adcione aqui o arquivo do seu desenho! </H3container2>
              <Image 
                type="file" 
                accept="video/*" 
                alt="drop"  
                onChange={(e)=> setVideo(e.target.files[0])} 
                
              />
              <TextContainer4  placeholder="Adcione o video aqui" />
            </DropFileHere>

            <Card4>
              <H3container1> Escreva o criador da sua postagem </H3container1>
              <TextContainer1 onChange={(e) => setCriador(e.target.value)} value={criador} placeholder="Escreva quem foi o criador do seu video " />
            </Card4>
          </CardContainer>

          <CardContainer2>
            <Card2>
              <H1conteiner2>Escreva uma descriçao para a sua postagem</H1conteiner2>
              <TextContainer2  onChange={(e) => setLegenda(e.target.value)} value={legenda} placeholder="Escreva sobre o que a sua postagem se trata" />
            </Card2>

            <Card3>
              <H1conteiner2>Escreva o tema da sua postagem</H1conteiner2>
              <TextContainer2 onChange={(e) => setTema(e.target.value)} value={tema} placeholder="Escreva qual o tema tratado no video(maximo 2)" />
            </Card3>

          </CardContainer2>

        </Criacaodopost>

        <Finalizacao>
          <ButtonCriar onClick={handleClick}>
            Postar
          </ButtonCriar>
        </Finalizacao>

      </PageWrapper>
    </>
  )
}

export default CriarPostagem;
