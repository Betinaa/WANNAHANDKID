import Modal from "../../components/Modal/Modal"
import { Button, DivContainer, DivCard } from './styled';
import { useState } from 'react';


function Login() {
    const [openModal, setOpenModal] = useState (false)

    return(
        <>
        <DivCard>
            Front Beginers - modal
            <DivContainer>
                <Button onClick={() => setOpenModal(true)}> 
                     Abrir o modal
                </Button>
            </DivContainer>
                <Modal isOpen={openModal}/>
        </DivCard>
        </>
    )
}

export default Login
