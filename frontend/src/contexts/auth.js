import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../services/api';

import {useHistory} from 'react-router-dom';
// import { Container } from './styles';

const AuthContext = createContext({user: {}, token: '', setToken: () => {}, logout: () => {}});

export const AuthProvider = ({children}) => {

    const history = useHistory();

    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('token').then((tokenAux) => {
            if(tokenAux){
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
            }
        });
        
    }, [])

    useEffect(async () => {
        console.log(token);
        if(token){
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
        }
    }, [token]);

    const logout = () => {
        AsyncStorage.removeItem('token').then();
        setToken('');
        setUser(null);
    }

    useEffect(() => {
        console.log(history);
    }, [user]);

    return (
        <AuthContext.Provider value={{user, token, setToken: setToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;