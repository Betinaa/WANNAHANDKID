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

function Videos() {
    return(
        <>
        <Header/>
        <BodyContainer>
            <SectionContainer>
                <VideoCard src={imagemdesenho1} alt="desenho1" />
                <VideoCard src={imagemdesenho2} alt="desenho2" />
                <VideoCard src={imagemdesenho3} alt="desenho3" />
                <VideoCard src={imagemdesenho4} alt="desenho4" />
                <VideoCard src={imagemdesenho5} alt="desenho5" />
                <VideoCard src={imagemdesenho6} alt="desenho6" />
                <VideoCard src={imagemdesenho7} alt="desenho7" />
                <VideoCard src={imagemdesenho8} alt="desenho8" />

            </SectionContainer>
        </BodyContainer>
        
        </>
  );
}  
export default Videos