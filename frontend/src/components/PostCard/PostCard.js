import {PostC, Foto, Titulo, Tema, DivDescricao, DivParteEscrita, DivBandeira, Favoritado} from "./styled";
import { VideoCard } from "../../paginas/Videos/styled";
import imagemdesenho1 from "../../assets/imagemdesenho1.jpg"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bandeira from "../../assets/bandeira.png"



function  PostCard(props) {

    const videos = 'http://localhost:3008/uploads/'
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3008/api/post/posts');
        if(response.data.success) {
            setPosts(response.data.data);
        }
    };

    const goToDetail = (postID) => {
        navigate(`/reproducao/${postID}`)
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <>
        <PostC onClick={(e) => goToDetail(props.PostID, e)}>
            <Foto>
                <source src={videos + props.PostPhoto} type="video/mp4"></source>
            </Foto>
                <DivDescricao>
                    <DivBandeira>
                        <Favoritado src={Bandeira} alt="Bandeira" />
                    </DivBandeira>
                    <DivParteEscrita>
                        <Titulo>
                            {props.CardContentTitle}
                        </Titulo>
                        <Tema>
                            {props.CardContentSubtitle}
                        </Tema>
                    </DivParteEscrita>
                </DivDescricao>
        </PostC>
        </>
    )
}
export default PostCard;