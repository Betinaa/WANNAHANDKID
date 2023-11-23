import Header from "../../components/Header/Header"
import { Video, DivCard, SectionContainer, DivText, DivVideo, DivLeftA,  BodyContainer, H5Card, DivDescricao, DivNota, H3Card, H6Comentario, DivTitulo,  DivParaComentar, DivNomePerfil, DivCategoria, FotoPerfil, DivComentario1, DivLeftComent, DivRightComent, DivComentario, FotoDePerfil, DivFazerComentar, Caixa, IconEnviar, H4Classificacao, H4Criador, H4Nota, DivAvaliacao, DivOverlay, Voltar, ImagemPlay, DivButton} from "./styled";
import FotoPerfil1 from "../../assets/FotoPerfil1.jpg"
import FotoPerfil2 from "../../assets/FotoPerfil2.jpg"
import imagemdesenho5 from "../../assets/imagemdesenho5.jpg"
import iconeenviar from "../../assets/iconeenviar.png"
import iconseta from "../../assets/iconseta.png"
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import imagemplay from "../../assets/imagemplay.png"
import { useEffect } from "react";
import { api } from "../../services/api";
import fidodido2 from "../../assets/fidodido2.jpg"
import { Foto } from "../../components/PostCard/styled";

function Reproducao() {
        const {postID} = useParams();
        const [postDetail, setPostDetail] = useState([]);
        const [video, setVideo] = useState("");
        const [comments, setComments ] = useState([]);
        const [commentContent, setCommentConent] = useState('');  

        const videos = 'http://localhost:3008/uploads/'
      
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await api.get(`/comments/${postID}`);
                const commentList = response.data.data;
                setComments(commentList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [postID]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.post(`/reproducao/posts`, { postID: postID });
                const postDetails = response.data.data[0];
                setPostDetail(postDetails)
                setVideo(videos + postDetail.video);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userId = parseInt(localStorage.getItem('id'))
        const data = {
          user_id: userId,
          postID: postID,
          comment_content: commentContent
        }
        try{
            const response = await api.post("/comments/create", data);
            console.log('Comentário criado com sucesso:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar o comentário:', error);
        }
    };
    console.log(postDetail)
    console.log(video)
    return(
        <>
        <Header/>
        <BodyContainer>
            <Link to='/videos'><Voltar src={iconseta} alt="seta"/></Link>
        <SectionContainer>
            <DivLeftA>

                { video && <DivVideo
                    controls={true} 
                    autoPlay={true} 
                    width="300px" 
                    height="300px"
                    name="mediaa"
                >
                    <source src={videos + postDetail.video } type="video/mp4"></source>
                    
                </DivVideo>

                }

                <DivText>
                    <DivNota>
                        <DivAvaliacao>
                    
                        </DivAvaliacao>

                        <H3Card>
                            {postDetail.titulo}
                        </H3Card>

                        <H4Criador>
                            {postDetail.criador}
                        </H4Criador>

                        <H4Classificacao>
                            {postDetail.tema}
                        </H4Classificacao>

                        <H4Nota>
                            4.5
                        </H4Nota>
                    </DivNota>

                    <DivDescricao>
                        <H5Card>
                            {postDetail.legenda}
                        </H5Card>
                    </DivDescricao>
                    
                </DivText>
                </DivLeftA>

                <DivCard>
                    <DivTitulo>
                        <H6Comentario> Comentários </H6Comentario> 
                    </DivTitulo>

                    <DivComentario1>
                        {comments.map((comment) => (
                        <DivRightComent
                            key={comment.id}
                            nameContact={comment.user_id}
                            comment={comment.descricao}
                        />
                        ))}
                            <DivNomePerfil>Cristina Ferreira</DivNomePerfil>
                            <DivCategoria> Professora de Educação Infantil</DivCategoria>
                            <DivComentario> Abordou bem a questão do medo muito comum, de ter um “monstro” no armário. Um amor de desenho!</DivComentario>
                        
                        </DivComentario1>
                        

                    <DivParaComentar>
                           <FotoDePerfil src={fidodido2} alt="perfil3"/>

                           <DivFazerComentar>
                                <Caixa 
                                    type="text" 
                                    placeholder="Escreva aqui"
                                    value={commentContent} 
                                    onChange={(e) => setCommentConent(e.target.value)}/> 
                                <IconEnviar 
                                    src={iconeenviar} 
                                    alt="icone" 
                                    onClick={handleSubmit} 
                                />
                           </DivFazerComentar>
                    </DivParaComentar>
                </DivCard>
       </SectionContainer>
       </BodyContainer>
        </>
  );
}
 
export default Reproducao;
