import { DivContainer, DivCard, ButtonFundo} from './styled';


function ModalPerfil({isOpen, children, setModalPerfilOpen}) {

    if(isOpen) { 
        return (
            <>
            <DivContainer>
               <DivCard> 
                {children}
                <ButtonFundo onClick={setModalPerfilOpen} />
               </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default ModalPerfil;

