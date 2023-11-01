import Header from "../../components/Header/Header"
import { Video, DivCard, SectionContainer, DivText, DivVideo, DivLeftA,  BodyContainer, H5Card, DivDescricao, DivNota, H3Card, H6Comentario, DivTitulo,  DivParaComentar, DivNomePerfil, DivCategoria, FotoPerfil, DivComentario1, DivLeftComent, DivRightComent, DivComentario, DivComentario2, FotoDePerfil, DivFazerComentar, Caixa, IconEnviar, H4Classificacao, H4Criador, H4Nota, StarCheckboxInput, StarCheckboxLabel, DivAvaliacao, DivOverlay, Voltar, ImagemPlay, DivButton} from "./styled";
import FotoPerfil1 from "../../assets/FotoPerfil1.jpg"
import FotoPerfil2 from "../../assets/FotoPerfil2.jpg"
import FotoPerfil3 from "../../assets/FotoPerfil3.jpg"
import imagemdesenho5 from "../../assets/imagemdesenho5.jpg"
import iconeenviar from "../../assets/iconeenviar.png"
import iconseta from "../../assets/iconseta.png"
import { useState } from 'react';
import { Link } from "react-router-dom";
import imagemplay from "../../assets/imagemplay.png"

function Reproducao() {
        const [isChecked, setIsChecked] = useState(false);
      
        const mudacheckbox = () => {
          setIsChecked(!isChecked);
    }

    return(
        <>
       <Header/>
       <BodyContainer>
            <Link to='/videos'><Voltar src={iconseta} alt="seta"/></Link>
       <SectionContainer>
            <DivLeftA>

                <DivVideo>
                    <Video src={imagemdesenho5} alt="FotoDesenho"/>
                    <DivOverlay>
                        <DivButton>
                        <ImagemPlay src={imagemplay} alt="play"/>
                        </DivButton>
                    </DivOverlay>
                </DivVideo>

                <DivText>
                    <DivNota>
                        <DivAvaliacao>
                    <StarCheckboxInput
                        type="checkbox"
                        id="starCheckbox"
                        checked={isChecked}
                        onChange={mudacheckbox}/>
                    <StarCheckboxLabel htmlFor="starCheckbox" checked={isChecked}>
                        &#9733;
                    </StarCheckboxLabel>

                    <StarCheckboxInput
                        type="checkbox"
                        id="starCheckbox"
                        checked={isChecked}
                        onChange={mudacheckbox}/>
                    <StarCheckboxLabel htmlFor="starCheckbox" checked={isChecked}>
                        &#9733;
                    </StarCheckboxLabel>

                    <StarCheckboxInput
                        type="checkbox"
                        id="starCheckbox"
                        checked={isChecked}
                        onChange={mudacheckbox}/>
                    <StarCheckboxLabel htmlFor="starCheckbox" checked={isChecked}>
                        &#9733;
                    </StarCheckboxLabel>

                    <StarCheckboxInput
                        type="checkbox"
                        id="starCheckbox"
                        checked={isChecked}
                        onChange={mudacheckbox}/>
                    <StarCheckboxLabel htmlFor="starCheckbox" checked={isChecked}>
                        &#9733;
                    </StarCheckboxLabel>

                    <StarCheckboxInput
                        type="checkbox"
                        id="starCheckbox"
                        checked={isChecked}
                        onChange={mudacheckbox}/>
                    <StarCheckboxLabel htmlFor="starCheckbox" checked={isChecked}>
                        &#9733;
                    </StarCheckboxLabel>
                    </DivAvaliacao>


                        <H3Card>
                            TEM UM YETI NO MEU ARMÁRIO, MÃE
                        </H3Card>

                        <H4Criador>
                            Cristina Nascimento
                        </H4Criador>

                        <H4Classificacao>
                            Perda / Animal  Companheiro
                        </H4Classificacao>

                        <H4Nota>
                            4.5
                        </H4Nota>
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
                    <DivTitulo>
                        <H6Comentario> Comentários </H6Comentario> 
                    </DivTitulo>

                    <DivComentario1>
                        <DivLeftComent>
                           <FotoPerfil src={FotoPerfil1} alt="perfil1"/>
                        </DivLeftComent>

                        
                        <DivRightComent>
                            <DivNomePerfil>Cristina Ferreira</DivNomePerfil>
                            <DivCategoria> Professora de Educação Infantil</DivCategoria>
                            <DivComentario> Abordou bem a questão do medo muito comum, de ter um “monstro” no armário. Um amor de desenho!</DivComentario>
                        </DivRightComent>
                        </DivComentario1>
                        
                        <DivComentario2>
                        <DivLeftComent>
                           <FotoPerfil src={FotoPerfil2} alt="perfil2"/>
                        </DivLeftComent>

                        
                        <DivRightComent>
                            <DivNomePerfil>Ana  Santos </DivNomePerfil>
                            <DivCategoria> Mãe </DivCategoria>
                            <DivComentario> Aprovado!! Minha filha gostou muito! um amor de desenho! </DivComentario>
                        </DivRightComent>
                        </DivComentario2>

                    <DivParaComentar>
                           <FotoDePerfil src={FotoPerfil3} alt="perfil3"/>

                           <DivFazerComentar>
                                <Caixa placeholder="Adcionar comentário" />  
                                <IconEnviar src={iconeenviar} alt="icone" />
                           </DivFazerComentar>
                    </DivParaComentar>
                </DivCard>
       </SectionContainer>
       </BodyContainer>
        </>
  );
} 
 
export default Reproducao;
