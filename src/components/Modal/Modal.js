import { DivContainer, DivCard } from './styled';


function Modal({isOpen}) {

    if(isOpen) {
        return (
            <>
            <DivContainer>
               <DivCard> <Modal/> </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default Modal;

