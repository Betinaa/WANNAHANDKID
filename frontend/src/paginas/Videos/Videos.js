import Header from "../../components/Header/Header"
import { BodyContainer, SectionContainer, VideoCard  } from "./styled";
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


function Videos() {
    return(
        <>
        <Header/>
        <BodyContainer>
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
                

            </SectionContainer>
        </BodyContainer>
        
        </>
  );
}  
export default Videos;