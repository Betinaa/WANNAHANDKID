import styled from "styled-components";


export const BodyContainer = styled.body`
    margin-top: 5vh;
    padding: 25px;
`

export const VideoCard = styled.img`
   width: 100%;
   border-radius: 30px;
   margin-bottom: 10px;

`

export const SearchContainer = styled.input`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    width: 10vw;
    height: 7vh;
    border-style: none;
    background-color: #F1F1EA;
    font-family: 'Nunito', sans-serif;
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    margin-left: 86vw;
    ::placeholder {
        
    }
    &:focus { 
        outline: 0;
    }

`


export const SectionContainer = styled.section`
    overflow: auto;
    align-items: flex-start;
    justify-content: center;
    /* column-gap: 10px;
    column-count: 4; */
    margin-left: 3vw;
    margin-right: 3vw;
`

