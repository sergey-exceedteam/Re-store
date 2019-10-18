import React from 'react';
import BookList from '../book-list';
import ShoppingCarteTable from '../shopping-carte-table';

const HomePage = () => {
    return(
    <div>
      <BookList />
      <ShoppingCarteTable/>
    </div>
    );
};

export default HomePage;