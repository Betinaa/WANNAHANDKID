import fidodido from "../../assets/fidodido.png"
import menuIcon from "../../assets/menuicon.png"
import Lupa from "../../assets/lupa.png"
import ModalPerfil from "../../components/ModalPerfil/ModalPerfil"
import { DivButton, DivButtonMenu, DivLogo, HeaderContainer, ImgLogo, ImgMenu, ImgPesquisa, FotoEditarPerfil, ParteCima, NomeUsuario, Profissao, ParteMeio, Descricao, Edicao, Favoritos, ProfissaoEditar, Categoria, Nome, FavoritosEstatico, FavoritosFuncional, Favoritado, NomeEstatico, NomeFuncional, CategoriaEstatico, CategoriaFuncional, ProfissaoEstatico, ProfissaoFuncional, CriarPostagemEstatico, CriarPostagem } from './styled';
import { useState } from 'react';
import FotoPerfil3 from "../../assets/FotoPerfil3.jpg"
import Bandeira from "../../assets/bandeira.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Header() {
  const [openModalPerfil, setOpenModalPerfil] = useState(false)

  const navigate = useNavigate()

  function goToCreateP() {
    console.log('aaaaaaaaa')
    navigate('/criarpostagem')
  }

  return (
  <>
    <HeaderContainer>
      <DivButtonMenu onClick={() =>
        setOpenModalPerfil(true)}>
        <ImgMenu src={menuIcon} alt="Menu" />
      </DivButtonMenu>
      <ModalPerfil isOpen={openModalPerfil}
        setModalPerfilOpen={() => setOpenModalPerfil(!openModalPerfil)}>
        <ParteCima>

          <FotoEditarPerfil src={FotoPerfil3} alt="Perfil" />
          <Descricao>
            <NomeUsuario>Angela Koch</NomeUsuario>
            <Profissao>Professora de Educação Infantil</Profissao>
          </Descricao>
        </ParteCima>

        <ParteMeio>
          <Edicao>

            <Favoritos>
              <FavoritosEstatico>
                Favoritos
              </FavoritosEstatico>
              <FavoritosFuncional>
                <a onClick={() => navigate('/favoritos')}>
                  <Favoritado src={Bandeira} alt="Bandeira" />
                </a>
              </FavoritosFuncional>
            </Favoritos>

            <Nome>
              <NomeEstatico>
                Nome
              </NomeEstatico>
              <NomeFuncional placeholder="Angela Koch" />
            </Nome>
            <ProfissaoEditar>
              <ProfissaoEstatico>
                Profissao
              </ProfissaoEstatico>
              <ProfissaoFuncional placeholder="Professora de Educação Infantil" />

            </ProfissaoEditar>

            <Categoria>
              <CategoriaEstatico>
                Categoria
              </CategoriaEstatico>
              <CategoriaFuncional placeholder="Professora" />
            </Categoria>

            <CriarPostagem>
            <CriarPostagemEstatico onClick={goToCreateP}>
                Criar Postagem
            </CriarPostagemEstatico>
            </CriarPostagem>

          </Edicao>
        </ParteMeio>


      </ModalPerfil>

      <DivLogo>

        <Link to='/home'>
        <ImgLogo src={fidodido} onClick={() =>navigate('/')} alt="Logo" />
        </Link>
      </DivLogo>
      <DivButton>

        <Link to='/videos'>
        <ImgPesquisa src={Lupa} onClick={() => navigate('/videos')} alt="Pesquisa" />
        </Link>

      </DivButton>
    </HeaderContainer>
    </>
  );
}

export default Header;

