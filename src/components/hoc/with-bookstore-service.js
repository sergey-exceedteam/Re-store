import React from 'react';
import { BookStoreServiceConsumer } from '../bookstore-srvice-context';


 const withBookStoreService = () => (Wrapped) => {

    return (props) => {
        return(
        <BookStoreServiceConsumer>
            {
                ( bookStoreService ) => {
                    return (<Wrapped {...props} bookStoreService={bookStoreService} />);
                }
            }
        </BookStoreServiceConsumer>    
        );
    }
 };

 export default withBookStoreService;