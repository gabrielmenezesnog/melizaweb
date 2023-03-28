import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from './RootReducer';

// Sagas
import rootSaga from './RootSaga';

// Criando middleware
const sagaMiddleware = createSagaMiddleware();

// Essa atualização adiciona o middleware do redux-saga
// criado com a função createSagaMiddleware e inicia o
// saga watchLogin com a função sagaMiddleware.run.y

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
