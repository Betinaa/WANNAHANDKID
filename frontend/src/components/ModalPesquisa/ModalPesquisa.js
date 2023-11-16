import { DivContainer, DivCard, ButtonFundo, PesquisarEscrever} from './styled';


function ModalPesquisa({isOpen, children, setModalPesquisaOpen}) {

    if(isOpen) { 
        return (
            <>
            <DivContainer>
               <DivCard > 
                {children}
                <PesquisarEscrever placeholder="Pesquisar"/>
                <ButtonFundo onClick={setModalPesquisaOpen} />
               </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default ModalPesquisa;