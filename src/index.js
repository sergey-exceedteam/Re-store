import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookStoreService from './services/bookstore-services';
import { BookStoreServiceProvider } from './components/bookstore-srvice-context';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    //Предоставляет доступ к Redux Store
    <Provider store={store}>
    {/* Обработка ошибок в компонентах ниже */}
        <ErrorBoundry>
    {/* Передает сервис через ContextAPI */}
            <BookStoreServiceProvider value={bookStoreService}>
    {/* Router из пакета react-router */}
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);