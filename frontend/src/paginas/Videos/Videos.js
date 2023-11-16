import Header from "../../components/Header/Header"
import { BodyContainer, SectionContainer, VideoCard } from "./styled";
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


function Videos() {

    const [filtroNome, setFiltroNome] = useState('')
    const [videos, setVideos] = useState([
        {
            id: 1,
            url: imagemdesenho1,
            nome: "desenho"
        },
        {
            id: 2,
            url: imagemdesenho2,
            nome: "imagemdesenho2"
        },
        {
            id: 3,
            url: imagemdesenho2,
            nome: "imagemdesenho2"
        },
        {
            id: 4,
            url: imagemdesenho2,
            nome: "2"
        },
        {
            id: 5,
            url: imagemdesenho2,
            nome: "6"
        }
        // <Link to='/reproducao'><VideoCard src={imagemdesenho1} alt="desenho1" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho2} alt="desenho2" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho3} alt="desenho3" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho4} alt="desenho4" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho5} alt="desenho5" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho6} alt="desenho6" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho7} alt="desenho7" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho8} alt="desenho8" /></Link>
        //     <Link to='/reproducao'><VideoCard src={imagemdesenho9} alt="desenho9" /></Link>


    ])

    console.log(filtroNome)

    const novoArray = videos.map((video) => {
        return (
            <Link to='/reproducao' key={video.id}>
                <VideoCard src={video.url} alt="desenho1" />
            </Link>

        )
    })

    const filtrarVideo = ()=>{
       const videosFiltrados= videos.filter((item)=>{
            return console.log(item.nome.includes(filtroNome))
        })
        return videosFiltrados
    }

    filtrarVideo()

    return (
        <>
            <Header />

            <input placeholder="pesquisar" 
            typeof={"text"}
            value={filtroNome}
            onChange={(e)=>{setFiltroNome(e.target.value)}}
            />
            <BodyContainer>
                <SectionContainer>
                    {novoArray}
                </SectionContainer>
            </BodyContainer>

        </>
    );
}
export default Videos;