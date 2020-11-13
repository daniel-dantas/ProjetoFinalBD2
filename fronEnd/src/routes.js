import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importação das paginas
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Caso a rota informada não corresponda a nenhuma das informadas */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
