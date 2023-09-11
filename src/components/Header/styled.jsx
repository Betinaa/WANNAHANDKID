import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DivButtonMenu = styled.button`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    background-color: #FFFFFF;
    cursor: pointer;
    border: none;
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    margin-left: 5%;

`

export const ImgLogo = styled.img`
    width: 5vw;
    height: 6vh;
    margin-top: 3vh;
    transform: rotate(363deg);
`

export const ImgMenu = styled.img`
    width: 4vw;
    height: 6vh;
    margin-left: 3vh;
    margin-top: 3vh;
`

export const DivButton = styled.div`
    text-align: center;
    border: none;
    margin-right: 5%;
    margin-bottom: 0.5%;
`

export const ImgPesquisa = styled.img`
    background: none;
    border: none;
    width: 3vw;
    height: 5vh;
    margin-top: 3vh;
`
export const FotoEditarPerfil = styled.img`
    width: 6vw;
    height: 11.6vh;
    border-radius: 50%;
`
export const ParteCima = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12vh;
    margin-left: 5vh;
`
export const NomeUsuario = styled.h3`
    align-items: center;
    justify-content: center;
`

export const Profissao = styled.h5`
    align-items: center; 
    justify-content: center;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #000000;
    opacity: 40%;
    font-size: 12px;
    margin-top: -0.1vh;

`


export const ParteMeio = styled.div`

`
export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
    justify-content: center;
    margin-left: 3vh;
`

export const Edicao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 17vh;
    margin-top: 19vh;

`

export const Nome = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ProfissaoEditar = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
`

export const Favoritos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
`

export const Categoria = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
`

export const Favoritado = styled.img`
    width: 4vw;
    height: 4vh;
    cursor: pointer;
    transform: rotate(360deg);
`

export const FavoritosEstatico = styled.h5`

`
export const FavoritosFuncional = styled.h5`
    margin-left: 16.5vw;
`

export const NomeEstatico = styled.h5`

`

export const NomeFuncional = styled.input`
    margin-left: 40vw;
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

export const CategoriaEstatico = styled.h5`


`

export const ProfissaoEstatico = styled.h5`

`
export const CategoriaFuncional = styled.input`
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

export const ProfissaoFuncional = styled.input`
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