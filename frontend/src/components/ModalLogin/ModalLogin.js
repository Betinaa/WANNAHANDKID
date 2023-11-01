import { DivContainer, DivCard, ImgLogo} from './styled';
import fidodido from '../../assets/fidodido.png';


function ModalLogin({isOpen, children, setModalLoginOpen}) {

    if(isOpen) { 
        return (
            <>
            <DivContainer>
                <ImgLogo src={fidodido} alt="Logo" onClick={setModalLoginOpen}/>
               <DivCard> 
                {children}
               </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default ModalLogin;

