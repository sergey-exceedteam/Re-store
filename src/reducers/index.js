const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
    
};

const updateCarteItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0,idx),
        item,
        ...cartItems.slice(idx + 1),
    ];
};

const updateCarteItem = (book, item = {}) => {
const {id = book.id, count = 0, title = book.title, total = 0 } = item;
   
return{
    id,
    title,
    count: count + 1,
    total: total + book.price 
  };
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_BOOKS_REQUEST':
            return{
                ...state,
                books:[],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCES':
            return {
                ...state,
                books: action.payload, 
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return{
                ...state,
                books:[],
                loading: false,
                error: action.payload
            }

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCarteItem(book,item);
            
            
                return{
                    ...state,
                    cartItems: updateCarteItems(state.cartItems, itemIndex, newItem)
                };

            default:
                return state;
    }
};

export default reducer;

