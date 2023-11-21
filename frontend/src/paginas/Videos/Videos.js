import imagemdesenho1 from "../../assets/imagemdesenho1.jpg"
import imagemdesenho2 from "../../assets/imagemdesenho2.jpg"
import imagemdesenho3 from "../../assets/imagemdesenho3.jpg"
import imagemdesenho4 from "../../assets/imagemdesenho4.jpg"
import imagemdesenho5 from "../../assets/imagemdesenho5.jpg"
import imagemdesenho6 from "../../assets/imagemdesenho6.jpg"
import imagemdesenho7 from "../../assets/imagemdesenho7.jpg"
import imagemdesenho8 from "../../assets/imagemdesenho8.jpg"
import imagemdesenho9 from "../../assets/imagemdesenho9.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import axios from "axios"
import { api } from "../../services/api"
import Header from "../../components/Header/Header"
import { SearchContainer, SectionContainer} from './styled';
import PostCard from "../../components/PostCard/PostCard"


function Videos() {
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState()
    const [posts, setPosts] = useState([])
    const [video, setVideo] = useState([])
    const [ searched, setSearched] = useState([])

    const handleSearchChange = (value) => {
        setSearched(value);
    };

    useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await api.get('/post/posts');
                const postList = response.data.data;
                setPosts(postList)
            } catch(err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header/>

            <SearchContainer
            type= 'text'
            placeholder= 'Pesquisar'
            value={searched}
            onChange= {(e) => handleSearchChange(e.target.value)}
            />
                <SectionContainer>
                    {posts
                        .filter((post) => post.tema.toLowerCase().includes(searched.toLowerCase()))
                        .map((post, index) => (
                            <PostCard
                                key={index}
                                PostPhoto={post.video}
                                CardContentTitle={post.titulo}
                                CardContentSubtitle={post.tema}
                            />
                        ))}
                </SectionContainer>

        </>
    );
}
export default Videos;