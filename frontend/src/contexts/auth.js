import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../services/api';
// import { Container } from './styles';

const AuthContext = createContext({user: {}, token: ''});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    useEffect(async () => {
        const tokenAux = await AsyncStorage.getItem('token');

        if (tokenAux) {
            setToken(tokenAux);
        }

    }, []);

    useEffect(async () => {
        Api.post('/user/me', {}, {
            headers:{
                authorization: token
            }
        }).then((res) => {
            setUser(res.data.user);
        }).catch((err) => {
            console.log(err);
        });
    }, [token]);

    return (
        <AuthContext.Provider value={{user, token}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;