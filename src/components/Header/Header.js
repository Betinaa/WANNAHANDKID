import fidodido from "../../assets/fidodido.png"
import menuIcon from "../../assets/menuicon.png"
import Lupa from "../../assets/lupa.png"
import { DivButton, DivLeft, DivLogo, HeaderContainer, ImgLogo, ImgMenu, ImgPesquisa } from './styled';

function Header() {
    return (
        <HeaderContainer>
          <DivLeft>
            <ImgMenu src={menuIcon} alt="Menu"/>
          </DivLeft>
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

