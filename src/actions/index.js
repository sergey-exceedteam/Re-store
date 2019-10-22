// действие которое отправляет первоначальный запрос
// запрос отправлен
const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
// для успешного получения книг (в payload передаются полученные данные)
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCES',
        payload: newBooks
    };
};
// для получения ошибки(в payload передается обьект Error)
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error

    }
};

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const bookRemoveFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

export const allbooksRemoveFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVE_FROM_CART',
        payload: bookId
    }
}

// const fetchBooksOld = (bookStoreService, dispatch) => () => {
//     dispatch(booksRequested());
//     bookStoreService.getBooks()
//         .then((data) => dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)));
// };

const fetchBooks = (bookStoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};


export { fetchBooks };