import fidodido from "../../assets/fidodido.png"
import menuIcon from "../../assets/menuicon.png"
import Lupa from "../../assets/lupa.png"
import ModalPerfil from "../../components/ModalPerfil/ModalPerfil"
import { DivButton, DivButtonMenu, DivLogo, HeaderContainer, ImgLogo, ImgMenu, ImgPesquisa } from './styled';
import { useState } from 'react';

function Header() {
  const [openModalPerfil, setOpenModalPerfil] = useState(false)


    return (
        <HeaderContainer>
          <DivButtonMenu onClick={() => setOpenModalPerfil(true)}>
            <ImgMenu src={menuIcon} alt="Menu" />
          </DivButtonMenu>
          <ModalPerfil isOpen={openModalPerfil} setModalPerfilOpen={() => setOpenModalPerfil(!openModalPerfil)}>
              

          </ModalPerfil>

          <DivLogo>
            <ImgLogo src={fidodido} alt="Logo"/>
          </DivLogo>
          <DivButton>
            <ImgPesquisa src={Lupa} alt="Pesquisa"/>
          </DivButton>
        </HeaderContainer>
      );      
}

export default Header;

