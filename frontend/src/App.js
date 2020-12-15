import React from 'react';

import Routes from './routes';
import Default from './styles/default';

import { AuthProvider } from './contexts/auth';

function App(){
    return(
        <AuthProvider>
            <div className="App">
                <Default />
                <Routes/>
            </div>
        </AuthProvider>
        
    );
}

export default App;