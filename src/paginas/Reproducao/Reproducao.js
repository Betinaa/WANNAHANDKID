import Header from "../../components/Header/Header"
import { Iframe, DivCard, SectionContainer, DivText, DivVideo, DivLeftA,  BodyContainer, H5Card, DivDescricao, DivNota, H3Card } from "./styled";


function Reproducao() {
    return(
        <>
       <Header/>
       <BodyContainer>
       <SectionContainer>
            <DivLeftA>
                <DivVideo>
                    <Iframe 
                        src="https://www.youtube.com/embed/kNw8V_Fkw28" 
                    ></Iframe>
                </DivVideo>

                <DivText>
                    <DivNota>
                        <H3Card>
                            TEM UM YETI NO MEU ARMÁRIO, MÃE
                        </H3Card>
                    </DivNota>

                    <DivDescricao>
                        <H5Card>
                            Conta a historia de Carolina, uma menina extremamente inteligente, que vive no  Alabama.Toda noite,ela tem a impressao que existe um yeti em seu armario, 
                            e sai correndo para o quarto de sua mãe.Mas um dia essa pequena menina resolve enfrentar seu medo... 
                        </H5Card>
                    </DivDescricao>
                    
                </DivText>
                </DivLeftA>

                <DivCard>
                    DIV CARD
                </DivCard>
       </SectionContainer>
       </BodyContainer>
        </>
  );
}  
export default Reproducao
