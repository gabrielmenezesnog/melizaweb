import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/usuario/UserReducer';

// Combina os reducers em um único reducer
const rootReducer = combineReducers({
  user: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
