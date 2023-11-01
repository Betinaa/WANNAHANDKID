import styled from "styled-components";

export const BodyContainer = styled.body`
    margin-top: 5vh;

`

export const Video = styled.img`
   width: 50vw;
   height: 60vh;
   border-radius: 30px;
   margin-bottom: 10vh;
   position: relative;

`

export const DivCard = styled.div`
   width: 26vw;
   height: 88vh;
   border-radius: 60px 60px 0px 0px;
   background-color: #F1F1EA;
   display: flex;
   margin-left: 3vw;
   flex-direction: column;
   bottom: 0;
`

export const DivVideo = styled.div`
   width: 50vw;
   height: 60vh;
   border-radius: 30px;
`


export const DivText = styled.div`
   width: 10vw;
   height: 10vh;
   display: flex;
   flex-direction: row;
   background-color: #ffffff;

`
export const DivLeftA = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   height: 88vh;
   
`

export const SectionContainer = styled.section`
   width: 90vw;
   height: 88vh;
   border-radius: 30px;
   margin-left: 9vw;
   margin-top: 7vh;
   display: flex;
   background-color: #ffffff;
   flex-direction: row;
`

export const DivDescricao = styled.div`
    display: flex;
`

export const H5Card = styled.h5`
    width: 20vw;
    margin-left: 9vw;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    opacity: 60%;
    font-size: 16;
    margin-top: 6vh;

`

export const DivNota = styled.div`

`
export const H3Card = styled.h3`
   width: 18vw;
   margin-left: 2vw;
   line-height: 3.5vh;
   letter-spacing: -0.48px;
`
export const H4Criador = styled.h4`
   width: 18vw;
   margin-left: 2vw;
   font-family: 'Nunito', sans-serif;
   color: #000000;
   font-size: 11px;
   font-style: normal;
   font-weight: 500;
   opacity: 60%;
   /* margin-top: 0.3vw; */
`
export const H4Classificacao = styled.h4`
   width: 18vw;
   margin-left: 2vw;
   font-family: 'Nunito', sans-serif;
   color: #000000;
   font-size: 11px;
   font-style: normal;
   font-weight: 500;
   opacity: 60%;
   margin-top: -0.2vw;
`
export const H4Nota = styled.h4`
   width: 18vw;
   margin-left: 2vw;
   font-family: 'Nunito', sans-serif;
   color: #000000;
   font-size: 11px;
   font-style: normal;
   font-weight: 500;
   margin-top: 1vw;
`

export const H6Comentario = styled.h6`
   font-family: 'Nunito', sans-serif;
   font-size: 16;
   font-style: normal;
   font-weight: 600;
   color: #000000;
   opacity: 50%;
`

export const DivTitulo = styled.div`
   margin-top: 2vh; 
   display: flex;
   align-items: center;
   justify-content: center;
   height: 3vh;
`

export const DivComentario1 = styled.div`
   display: flex;
`

export const DivParaComentar = styled.div`
   width: 26vw;
   height: 50vh;
   background-color: #D9D9D9;
   display: flex;
   margin-top: 62vh;
   flex-direction: row;
   position: fixed;
   
`

export const DivComentario = styled.div`
   display: flex;
   flex-direction: column;
   font-family: 'Nunito', sans-serif;
   font-size: 12px;
   font-style: normal;
   font-weight: 500;
   opacity: 40%;
   width: 16vw;
   margin-top: 2vh;
`

export const FotoPerfil= styled.img`
    width: 3.2vw;
    height: 6vh;
    border-radius: 50px;
    margin-left: 2vw;
    margin-top: 5vh;
`

export const DivNomePerfil = styled.div`
   flex-direction: column;
   display: flex;
   font-size: 13px;
   margin-bottom: 0vh;
`

export const DivCategoria = styled.div`
   flex-direction: column;
   display: flex;
   font-family: 'Nunito', sans-serif;
   font-size: 11px;
   font-style: normal;
   font-weight: 600;
   color: #000000;
   opacity: 30%;
   margin-top: 0.1vh;
`

export const DivLeftComent = styled.div`
   flex-direction: column;
   display:flex;
   width: 6vw;

`

export const DivRightComent = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 5vh;
   margin-left: 2vh;

`

export const DivComentario2 = styled.div`
     display: flex;
`

export const FotoDePerfil= styled.img`
    width: 3vw;
    height: 6vh;
    border-radius: 50px;
    margin-left: 2vw;
    margin-top: 2vh;
`


export const DivFazerComentar = styled.div`
   display: flex;
    flex-direction: row;
    align-items: center;
    border-style: none;
    background-color: #F1F1EA;
    margin-left: 1vw;
    height: 7vh;
    width: 19.5vw;
    border-radius: 67px;
    margin-top: 1vh;

`


export const Caixa = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    ::placeholder {
        
    }
    margin-left: 2vw;
    &:focus { 
        outline: 0;
    }
`

export const IconEnviar = styled.img`
   display: flex;
   align-items: right;
    width: 2vw;
    height: 3vh;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1vw;
    transform: rotate(348deg);
`

export const StarCheckboxLabel = styled.label`
  cursor: pointer;
  color: ${(props) => (props.checked ? '#FFB600' : '#000000' )};
  margin-left: 2vw;
  font-size: 36px;

    &:checked {
      background-color: #000000; 
    }

    &:focus {
      /* outline: none; */
      box-shadow: #ffffff; 
      outline: 2px solid #ffffff;
    }
`

export const StarCheckboxInput = styled.input`
  display: flex;
  appearance: none; 
  width: 2vw; 
  
`

export const DivAvaliacao = styled.div`
  display: flex;
  width: 1vw;
  
    
`

export const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 11vw;
  margin-top: 75vh;
  width: 45vw;
  height: 7vh;
  background-color: rgba(184, 184, 184, 0.5); /* Cor de fundo da div de sobreposição */
  color: white; /* Cor do texto dentro da div de sobreposição */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 67px;
`
export const Voltar = styled.img`
    width: 2vw;
    height: 3.5vh;
    transform: rotate(363deg);
    margin-left: 3vw;
`

export const ImagemPlay = styled.img`
   width: 3vw;
   height: 4.5vh;
`

export const DivButton = styled.button`
   background-color: transparent;
   cursor: pointer;
   border: none;
   display: flex;

`