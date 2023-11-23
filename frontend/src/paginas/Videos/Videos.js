import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import axios from "axios"
import { api } from "../../services/api"
import Header from "../../components/Header/Header"
import { SearchContainer, SectionContainer, ImgPesquisa, CardPesquisa} from './styled';
import PostCard from "../../components/PostCard/PostCard"
import Lupa from "../../assets/lupa.png"


function Videos() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [searched, setSearched] = useState([])

    const videos = 'http://localhost:3008/uploads/'

    const handleSearchChange = (value) => {
        setSearched(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/post/posts');
                const postList = response.data.data;
                setPosts(postList)
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    console.log(posts)

    return (
        <>
            <Header />
            <CardPesquisa>
                <ImgPesquisa src={Lupa}/>
            <SearchContainer
                type='text'
                placeholder='Pesquise pelo tema'
                value={searched}
                onChange={(e) => handleSearchChange(e.target.value)}
            /> 
            </CardPesquisa>


            <SectionContainer>
                {posts
                    .filter((post) => post.tema.toLowerCase().includes(searched && typeof searched === 'string' ? searched.toLowerCase() : ''))
                    .map((post, index) => (
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
    );
}
export default Videos;