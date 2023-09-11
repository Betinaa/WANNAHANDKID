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
import imagemdesenho10 from "../../assets/imagemdesenho10.jpg"
import imagemdesenho11 from "../../assets/imagemdesenho11.jpg"
import imagemdesenho12 from "../../assets/imagemdesenho12.jpg"
import imagemdesenho13 from "../../assets/imagemdesenho13.jpg"
import imagemdesenho14 from "../../assets/imagemdesenho14.jpg"
import imagemdesenho15 from "../../assets/imagemdesenho15.jpg"
import imagemdesenho16 from "../../assets/imagemdesenho16.jpg"
import imagemdesenho17 from "../../assets/imagemdesenho17.jpg"


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
                <VideoCard src={imagemdesenho9} alt="desenho9" />
                <VideoCard src={imagemdesenho10} alt="desenho10" />
                <VideoCard src={imagemdesenho11} alt="desenho11" />
                <VideoCard src={imagemdesenho12} alt="desenho12" />
                <VideoCard src={imagemdesenho13} alt="desenho13" />
                <VideoCard src={imagemdesenho14} alt="desenho14" />
                <VideoCard src={imagemdesenho15} alt="desenho15" />
                <VideoCard src={imagemdesenho16} alt="desenho16" />
                <VideoCard src={imagemdesenho17} alt="desenho17" />

            </SectionContainer>
        </BodyContainer>
        
        </>
  );
}  
export default Videos