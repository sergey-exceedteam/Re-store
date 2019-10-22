import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
};


// функц-ия которая приимет createStore и возвращает новую версию createStore которая контролирует аспекты создания Store
//  const logEnchancer = (createStore) => (...args) => {
//      const store = createStore(...args);
//      const originalDispatch = store.dispatch;
//      store.dispatch = (action) => {
//          console.log(action.type);
//          return originalDispatch(action);
//      };

//     return store;
// };


const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);


const delayedActionCreatore = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
    };

store.dispatch(delayedActionCreatore(3000));

export default store;

