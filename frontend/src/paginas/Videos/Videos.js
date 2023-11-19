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
import Filtro from "../../components/Filtro/Filtro"
import { Input,RespostaFiltros } from "./styled"


function Videos() {
    const navigate = useNavigate()
    const [filtroNome, setFiltroNome] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])
    const [nome, setNome] = useState()
    const [posts, setPosts] = useState([])
    const [videos, setVideos] = useState([])

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (!token) {
    //         navigate("/");
    //     }
    // }, [navigate]);
    
    
    // useEffect(() => {
    //     axios.get(`${api}/posts/posts`)
    //         .then(function (response) {
    //             setPosts(response.data.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //             alert("Erro ao buscar posts")
    //         });
    // })
   
    const [checkedToppingsFiltro, setCheckedToppingsFiltro] = useState([]);

    useEffect(() => {
        if (posts && nome) {
            const lowercaseNome = nome.toLowerCase();
            setFilteredPosts(posts.filter(post => post.titulo.toLowerCase().includes(lowercaseNome)));
        } else {
            setFilteredPosts(posts);
        }
    }, [nome, posts]);

    return (
        <>
            <Header/>

            {/* <input placeholder="pesquisar"
                typeof={"text"}
                value={filtroNome}
                onChange={(e) => { setFiltroNome(e.target.value) }}
            /> */} 
            <Filtro
            onCheckedToppingsChange={(toppings) => setCheckedToppingsFiltro(toppings)}
            />
                <Input value={nome} onChange={(e) => setNome(e.target.value)} type='text' placeholder="Pesquise por título" id='titulo' name='titulo' />
            <RespostaFiltros>
                {checkedToppingsFiltro}
            </RespostaFiltros>

        </>
    );
}
export default Videos;