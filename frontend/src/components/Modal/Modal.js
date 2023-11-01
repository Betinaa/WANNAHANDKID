import { DivContainer, DivCard, ImgLogo} from './styled';
import fidodido from '../../assets/fidodido.png';



function Modal({isOpen, children, setModalOpen}) {

    if(isOpen) { 
        return (
            <>
            <DivContainer>
                <ImgLogo src={fidodido} alt="Logo" onClick={setModalOpen}/>
               <DivCard> 
                {children}
               </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default Modal;

