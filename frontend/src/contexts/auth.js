import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../services/api';
// import { Container } from './styles';

const AuthContext = createContext({user: {}, token: '', setToken: () => {}, logout: () => {}});

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
            setUser(res.data.user);
        }).catch((err) => {
            console.log(err);
            setUser(null);
        });
    }, [token]);

    const logout = () => {
        setToken('');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, token, setToken: setToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;