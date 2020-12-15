import React from 'react';

import {MainProfile, ProfileContent,ProfileForm,EditButton, DeleteButton,ProfileAvatar} from './style';
import NavBar from '../../components/NavMenu';
import Input from '../../components/InputField';
import userAvatar from '../../assets/img/perfil-avatar.jpg';

function Profile(){ 
    return(
        <MainProfile>
            <NavBar></NavBar>
            <ProfileContent>
                <ProfileForm>
                    <Input placeholder="Seu email" type="text" id="email" name="email" width={90+"%"}></Input>
                    <Input placeholder="Seu nome" type="text" id="name" name="name" width={90+"%"}></Input>
                    <Input placeholder="Sua empresa" type="text" id="company" name="company" width={90+"%"}></Input>
                    <Input placeholder="Seu CNPJ" type="text" id="cnpj" name="cnpj" width={90+"%"}></Input>
                    <Input placeholder="Nova Senha" type="password" id="password" name="password" width={90+"%"}></Input>
                    <Input placeholder="Confirmar Nova Senha" type="confirm" id="confirm" name="password" width={90+"%"}></Input>
                    <EditButton>Editar</EditButton>
                    <DeleteButton>Deletar sua conta</DeleteButton>
                </ProfileForm>
                   
                <ProfileAvatar>
                    <img src={userAvatar} alt="User Avatar"></img>
                    <p>Alterar foto de perfil</p>
                    <p>Remover foto do perfil</p>
                </ProfileAvatar>
            </ProfileContent>
        </MainProfile>
    );
}

export default Profile;