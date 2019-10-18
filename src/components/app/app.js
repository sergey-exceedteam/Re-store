import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../../shop-header';
import './app.css';
import { HomePage, CartePage } from '../pages';

const App = () => {
    return (
    <main role="main" className="container">
        <ShopHeader numItems={5} total={210} />
        <Switch>
            <Route 
              path='/'
              component = {HomePage}
              exact />
            
            <Route
            path="/carte"
            component = {CartePage}/>
        </Switch>
    </main>
    );
};

export default App;