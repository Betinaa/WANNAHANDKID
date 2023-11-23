import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import { SectionContainer } from "../Videos/styled";
import { CenterDiv, FotoEditarPerfil, LeftDiv, MainContent, RightDiv, TituloH2 } from "../Criar_Postagem/styled";
import fidodido2 from "../../assets/fidodido2.jpg"

function  Visualizar_Publicacao() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    const user_id = localStorage.getItem("id")

    const videos = 'http://localhost:3008/uploads/'

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3008/api/post/posts');
        if(response.data.success) {
            setPosts(response.data.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    // useEffect(() => {
    //     async function fetchPublis() {
    //         try {
    //             const response = await api.get(`/publiperson/${user_id}`); 
    //             setInfos(response.data.data);
    //             console.log("resposta do response.data DO CARD :", response.data.data)
    //             console.log("resposta do id da publicacao DO CARD:", response.data.data.id_publicacao_pessoa)
                
    //         } catch (error) {
    //             console.error('Erro ao recuperar as informações da publi:', error);
    //         }
    //     }
    
    //     fetchPublis();
    // }, []);



    return (
        <>
        <Header/>

        {/* {posts.map((post) => { */}
            {/* return (
                <>                 */}
                    {/* <p>{post.titulo}</p>
                    <p>{post.legenda}</p>
                    <p>
                        <video 
                            controls="true" 
                            autoplay="true" 
                            width="300px" 
                            height="300px"
                            name="media">

                            <source src={videos + post.video} type="video/mp4"></source>
                        </video>
                    </p> */}
                        <MainContent>
                            <LeftDiv>
                            </LeftDiv>

                            <CenterDiv>
                                <FotoEditarPerfil src={fidodido2} alt="Perfil" />
                            </CenterDiv>

                            <RightDiv>
                                <TituloH2> Visualize suas proprias postagens!</TituloH2>
                            </RightDiv>
                        </MainContent>
                
                    <SectionContainer>
                        {posts.map((post, index) => (
                                <PostCard
                                    key={index}
                                    PostID={post.id}
                                    PostPhoto={post.video}
                                    CardContentTitle={post.titulo}
                                    CardContentSubtitle={post.tema}
                                />
                            ))}

                    </SectionContainer>
                
            
                </>
            )
        }
        // )}

        // </>
//     )
// }
export default Visualizar_Publicacao