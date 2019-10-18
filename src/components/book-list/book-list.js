import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
return(
    <ul className ="book-list">
        {
          books.map((book) => {
              return(
                  <li key = {book.id}>
                      <BookListItem 
                      book={book} 
                      onAddedToCart = {() => onAddedToCart(book.id)}/>
                      

                  </li>
              )
          })
        }
    </ul>
    )
 };

class BookListContainer extends Component {

    componentDidMount(){
        // 1.вызывая эту функцию наш компонент запускает логику получения даных 
        this.props.fetchBooks();
    }

    render () {
        const { books, loading, error, onAddedToCart } = this.props;
        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }
        
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
};
// Какие свойства получит кмпонент из Redux
const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return{
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)) 
    };
};


export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
