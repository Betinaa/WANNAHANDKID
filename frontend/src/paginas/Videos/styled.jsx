import styled from "styled-components";


export const SearchContainer = styled.input`
    display: flex;
    border-style: none;
    font-family: 'Nunito', sans-serif;
    background-color: #F1F1EA;
    font-style: normal;
    font-weight: 500;
    border-radius: 30px;
    margin-left: 1vw;
    ::placeholder {
  }
    &:focus { 
        outline: 0;
    }


`

export const CardPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    width: 40vw;
    height: 7vh;
    border-style: none;
    background-color: #F1F1EA;
    font-family: 'Nunito', sans-serif;
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    margin-left: 5vw;
    margin-top: 5vh;
    ::placeholder {
    color: #999; /* cor desejada para o placeholder */
    width: 200px;
  }
    &:focus { 
        outline: 0;
    }

`

export const ImgPesquisa = styled.img`
    background: none;
    border: none;
    width: 3vw;
    height: 5vh;
    margin-top: 1vh;
    margin-left: 2vh;
`


export const SectionContainer = styled.section`
    /* overflow: auto; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    column-gap: 10px;
    column-count: 2;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 7vh;
    height: 100vh;
`
