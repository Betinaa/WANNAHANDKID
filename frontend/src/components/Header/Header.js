import fidodido from "../../assets/fidodido.png"
import menuIcon from "../../assets/menuicon.png"
import Lupa from "../../assets/lupa.png"
import ModalPerfil from "../../components/ModalPerfil/ModalPerfil"
import { DivButton, DivButtonMenu, DivLogo, HeaderContainer, ImgLogo, ImgMenu, ImgPesquisa, FotoEditarPerfil, ParteCima, NomeUsuario, Profissao, ParteMeio, Descricao, Edicao, Favoritos, EmailEditar, Categoria, Nome, FavoritosEstatico, FavoritosFuncional, Favoritado, NomeEstatico, NomeFuncional, CategoriaEstatico, CategoriaFuncional, EmailEstatico,   EmailFuncional, CriarPostagemEstatico, CriarPostagem, PesquisaEscrever, VerPostagemEstatico, VerPostagem } from './styled';
import { Children, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Header() {
  const [openModalPerfil, setOpenModalPerfil] = useState(false)

  const navigate = useNavigate()

  return (
  <>
    <HeaderContainer>
      <DivButtonMenu onClick={() =>
        setOpenModalPerfil(true)}>
        <ImgMenu src={menuIcon} alt="Menu" />
      </DivButtonMenu>
      <ModalPerfil isOpen={openModalPerfil}
        setModalPerfilOpen={() => setOpenModalPerfil(!openModalPerfil)}>
      
      </ModalPerfil>

      <DivLogo>

        <Link to='/home'>
        <ImgLogo src={fidodido} onClick={() =>navigate('/')} alt="Logo" />
        </Link>
      </DivLogo>
      <DivButton>


        <ImgPesquisa src={Lupa} 
        // onClick={() => setOpenModalPesquisa(true)} 
        onClick={() => navigate('/videos')} 
        alt="Pesquisa" 
        />
 
      </DivButton>
    </HeaderContainer>
    </>
  );
}

export default Header;

