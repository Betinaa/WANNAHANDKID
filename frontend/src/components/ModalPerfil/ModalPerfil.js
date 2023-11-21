import { DivContainer, DivCard, ButtonFundo, FotoEditarPerfil, ParteCima, NomeUsuario, Profissao, ParteMeio, Descricao, Edicao, Favoritos, EmailEditar, Categoria, Nome, FavoritosEstatico, FavoritosFuncional, Favoritado, NomeEstatico, NomeFuncional, CategoriaEstatico, CategoriaFuncional, EmailEstatico,   EmailFuncional, CriarPostagemEstatico, CriarPostagem, PesquisaEscrever, VerPostagemEstatico, VerPostagem } from './styled';
import FotoPerfil3 from "../../assets/FotoPerfil3.jpg"
import Bandeira from "../../assets/bandeira.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api';
import { useEffect } from "react";


function ModalPerfil({isOpen, setModalPerfilOpen}) {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({ name: '', email: '' });


    const fetchData = async () => {
        const id = localStorage.getItem('id');
        console.log('User ID:', id);
        //alert(id);
        if (id) {
            try {
                const response = await api.get('/user/' + id);
                console.log(response);
                setUserData(response.data.data[0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
                console.log('Response:', error.response);
            }

        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    if(isOpen) { 
        return (
            <>
            <DivContainer>
               <DivCard> 
                        <ParteCima>

                            <FotoEditarPerfil src={FotoPerfil3} alt="Perfil" />
                            <Descricao>
                                <NomeUsuario defaultValue={userData.name}>
                                    
                                </NomeUsuario>
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
                                    <NomeFuncional                                     
                                    defaultValue={userData.name}
                                    />
                                </Nome>
                                <EmailEditar>
                                    <EmailEstatico>
                                        Email
                                    </EmailEstatico>
                                    <EmailFuncional 
                                    defaultValue={userData.email}
                                    />

                                </EmailEditar>

                                <Categoria>
                                    <CategoriaEstatico>
                                        Categoria
                                    </CategoriaEstatico>
                                    <CategoriaFuncional placeholder="Professora" />
                                </Categoria>
                            </Edicao>
                        </ParteMeio>

                        <Link to='/criarpostagem'>
                            <CriarPostagem>
                                <CriarPostagemEstatico >
                                    Criar Postagem
                                </CriarPostagemEstatico>
                            </CriarPostagem>
                        </Link>

                        <Link to='/visualizarpublicacao'>
                            <VerPostagem>
                                <VerPostagemEstatico >
                                    Visualizar minhas publicações
                                </VerPostagemEstatico>
                            </VerPostagem>
                        </Link>
                <ButtonFundo onClick={setModalPerfilOpen} />
               </DivCard>
            </DivContainer>
           </>
            );
    } 
    
    return null

    }
    
export default ModalPerfil;

