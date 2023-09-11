import Header from "../../components/Header/Header"
import { BodyContainer, SectionContainer, VideoCard, FavoritoTitulo  } from "./styled";
import imagemdesenho1 from "../../assets/imagemdesenho1.jpg"
import imagemdesenho2 from "../../assets/imagemdesenho2.jpg"
import imagemdesenho3 from "../../assets/imagemdesenho3.jpg"
import imagemdesenho4 from "../../assets/imagemdesenho4.jpg"
import imagemdesenho5 from "../../assets/imagemdesenho5.jpg"
import imagemdesenho6 from "../../assets/imagemdesenho6.jpg"
import imagemdesenho7 from "../../assets/imagemdesenho7.jpg"
import imagemdesenho8 from "../../assets/imagemdesenho8.jpg"
import imagemdesenho9 from "../../assets/imagemdesenho9.jpg"
import imagemdesenho10 from "../../assets/imagemdesenho10.jpg"
import imagemdesenho11 from "../../assets/imagemdesenho11.jpg"
import imagemdesenho12 from "../../assets/imagemdesenho12.jpg"
import imagemdesenho13 from "../../assets/imagemdesenho13.jpg"
import imagemdesenho14 from "../../assets/imagemdesenho14.jpg"
import imagemdesenho15 from "../../assets/imagemdesenho15.jpg"
import imagemdesenho16 from "../../assets/imagemdesenho16.jpg"
import imagemdesenho17 from "../../assets/imagemdesenho17.jpg"
import { Link } from "react-router-dom";


function Favoritos() {
    return(
        <>
        <Header/>
        <BodyContainer>
            <FavoritoTitulo>Favoritos</FavoritoTitulo>
            <SectionContainer>
                <Link to='/reproducao'><VideoCard src={imagemdesenho1} alt="desenho1" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho2} alt="desenho2" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho3} alt="desenho3" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho4} alt="desenho4" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho5} alt="desenho5" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho6} alt="desenho6" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho7} alt="desenho7" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho8} alt="desenho8" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho9} alt="desenho9" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho10} alt="desenho10" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho11} alt="desenho11" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho12} alt="desenho12" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho13} alt="desenho13" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho14} alt="desenho14" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho15} alt="desenho15" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho16} alt="desenho16" /></Link>
                <Link to='/reproducao'><VideoCard src={imagemdesenho17} alt="desenho17" /></Link>

            </SectionContainer>
        </BodyContainer>
        
        </>
  );
}  
export default Favoritos;