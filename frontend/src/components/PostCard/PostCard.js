import {PostC, Foto, Titulo, Tema} from "./styled";
import { VideoCard } from "../../paginas/Videos/styled";
import imagemdesenho1 from "../../assets/imagemdesenho1.jpg"



function  PostCard(props) {
    return (
        <>
        <PostC>
            <Foto>
                {props.PostPhoto}
                <VideoCard src={imagemdesenho1} alt="desenho1" />
            </Foto>
            <Titulo>
                {props.CardContentTitle}
                UMA CORRIDA MALUCA
            </Titulo>
            <Tema>
                {props.CardContentSubtitle}
                orgulho/autoestima
            </Tema>
        </PostC>
        </>
    )
}
export default PostCard;