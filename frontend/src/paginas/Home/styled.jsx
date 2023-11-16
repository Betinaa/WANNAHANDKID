import styled from "styled-components";
// import fototras from "../../assets/fototras.jpg"


export const BodyContainer = styled.body`
    display: flex;
    flex-direction: column;
`

export const H1Container = styled.h1`
    display: flex;
    align-items: left; 
    background-color: #FFFFFF;
    margin-left: 6vw;
    width: 34vw;
    text-transform: uppercase;
    align-items: center;
    font-size: 42px;
    line-height: 40px;
    margin-bottom: 2vh;
    letter-spacing: -1.2px;
    line-height: 7vh;
`

export const H5Container = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    background-color: #FFFFFF;
    margin-left: 12vh;
    width: 30vw;
    font-family: 'Nunito', sans-serif;
    color: #545454;
    letter-spacing: -0.34px;
    opacity: 42%;
    line-height: 120%;
    font-style: Normal;
    font-weight: 500;
`

export const H5Container2 = styled.h5`
    display: flex;
    background-color: #FFFFFF;
    margin-left: 2.5vw;
    width: 21vw;
    /* align-items: center; */
    font-size: 16px;
    background-color: transparent;
    margin-top: 3vh;

`
export const H5Container3 = styled.h5`
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    margin-left: 4.6vh;
    margin-top: 1vh;
    width: 30vw;
    font-family: 'Nunito', sans-serif;
    color: #545454;
    letter-spacing: -0.34px;
    opacity: 42%;
    line-height: 120%;
    font-style: Normal;
    font-weight: 500;

`

export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; /* Centraliza horizontalmente */
    background-color: transparent;
    width: 50vw;


`

export const DivRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right; /* Centraliza verticalmente */
    justify-content: right; /* Centraliza horizontalmente */
    width: 50vw;

`
export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: #E9E9DF;
    
    border-radius: 60px;
    width: 20vw;
    height: 65vh;
    margin-right: 23vh;
    z-index: 1;
    position: relative;
    /* margin-bottom: 70vh; */
    
`
export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 11vh;
`

export const CaixaEmailContainer = styled.input`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    width: 80%;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    ::placeholder {
        
    }
    margin-left: 1vw;
    &:focus { 
        outline: 0;
    }

`

export const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-style: none;
    background-color: #F1F1EA;
    margin-left: 5vw;
    height: 10vh;
    width: 35vw;
    border-radius: 67px;
    margin-top: 6vh;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: #000000;
    height: 8vh;
    color: #FFFFFF;
    border-radius: 67px;
    width: 14vw;
    border: none;
    font-size: 11px;
`
export const ImgMeninaFrente = styled.img`
    width: 17vw;
    height: 45vh;
    border-radius: 39px;
    margin-left: 7%;
    margin-top: 7%;
    justify-content: center;
`
export const EnvelopeEmail = styled.img`
    align-items: left;
    width: 4vw;
    height: 5vh;
    /* margin-left: 10vw; */
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2vw;
    opacity: 42%;
`
// export const Imgtras = styled.img`
//     width: 18vw;
//     height: 42vh;
//     border-radius: 40px;
//     margin-top: 8vh;
//     margin-right: 25vw;
//     margin-left: 50vw;
//     margin-bottom: 50vh;
//     z-index: -1;
//     opacity: 70%;
//     transform: rotate(365deg);
// `

export const CaixaContainer = styled.input`
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

export const Caixa2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    border-style: none;
    background-color: #F1F1EA;
    height: 7.5vh;
    width: 31vw;
    border-radius: 70px;
    margin-top: 2vh; 
`

export const H1Container2 = styled.h1`
    font-size: 14px;
    margin-top:3vh;
    /* align-items: center; */
    /* justify-content: center; */
`
export const DivTitulo = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
`

export const SectionCadastro = styled.form`

`
export const DivFormulario = styled.form`
    margin-top: 8vh;

`
export const DivEnter = styled.div`
    
`
export const Button2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: #000000;
    height: 5vh;
    color: #FFFFFF;
    border-radius: 67px;
    width: 23vw;
    border: none;
    font-size: 11px;
    margin-left: 8vw;
    margin-top: 3vh;
`
export const DivCheck = styled.div`
    margin-top: 3vw;
    margin-left: 1vw;
`

export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 11px;
    letter-spacing: -0.32px;
    /* opacity: 0.6; */
    margin-left: 1vw;

    display: flex;
    align-items: center;
    cursor: pointer;

`

export const InputCheckBox = styled.input`
    appearance: none; 
    width: 2vw;
    height: 4vh;
    border: 1px solid #000000;
    border-radius: 50px;
    margin-right: 1vw;
    cursor: pointer;

    &:checked {
      background-color: #000000; /* Cor de fundo quando o checkbox está marcado */
      border-color: #000000;
    }

    &:focus {
      /* outline: none; */
      box-shadow: #000000; /* Adiciona um contorno ao focar no checkbox */
      outline: 2px solid #ffffff;
    }

`

export const DivLogin = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 6.5vw;
    margin-top: 2vh;

`

export const H6Container1 = styled.h6`
    font-family: 'Nunito', sans-serif;
    color: #3e3d3d;
    opacity: 42%;
    font-style: Normal;
    font-weight: 500;
    font-size: 13px;

`

export const ButtonLogin = styled.button`
    margin-left: 0.3vw;
    font-family: 'Nunito', sans-serif;
    color: #000000;
    font-style: Normal;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: transparent;
    /* height: vh; */
    color: #000000;
    border-radius: 67px;
    width: 3vw;
    border: none;
    cursor: pointer;

`

export const H6Container3 = styled.h6`
    margin-left: 0.3vw;
    font-family: 'Nunito', sans-serif;
    color: #3e3d3d;
    opacity: 42%;
    font-style: Normal;
    font-weight: 500;
    font-size: 13px;
`

export const SectionSujestoes = styled.section`
    margin-top: 7vh;
    column-gap: 10px;
    column-count: 4;
    margin-left: 10vw;
    margin-right: 10vw;

`

export const H6Sujestoes = styled.h6`
    font-size: 22px;
    margin-top:11vh;
    margin-left:6vw;
    
`

export const DivCima = styled.div`
    display: flex;
    flex-direction: row;

`

export const VideoCard = styled.img`
    width: 100%;
    border-radius: 30px;
    margin-bottom: 10px;
    cursor: pointer;
`

export const DivTitulos= styled.div`
    display: flex;
    flex-direction: column; 
    position: relative;
    background-color: #ffffff;

`

export const H3Titulo = styled.h3`
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    background-color: #2701ff;
    color: #ff0000;
    /* padding: 90px 184px 40px 0px; */
    border-radius: 5px;
    margin-top: 5vh;
    align-items: bottom;
    display: flex;
    justify-content: bottom;
    
`

export const H5Classificacao = styled.h5`
    /* display: flex;
    flex-direction: row; */
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    background-color: #fff201;
    color: #ff0000;
    /* padding: 90px 184px 40px 0px; */
    border-radius: 5px;
    margin-top: 5vh;
    align-items: bottom;
    display: flex;
    justify-content: bottom;

`
