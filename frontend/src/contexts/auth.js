import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../services/api';
// import { Container } from './styles';

const AuthContext = createContext({user: {}, token: '', setToken: () => {}});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    useEffect(async () => {
        const tokenAux = await AsyncStorage.getItem('token');
        setToken(tokenAux);
    }, [])

    useEffect(async () => {
        console.log(token);
        Api.post('/user/me', {}, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res);
            setUser(res.data.user);
        }).catch((err) => {
            console.log(err);
            setUser(null);
        });
    }, [token]);

    return (
        <AuthContext.Provider value={{user, token, setToken: setToken}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;