import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/auth';
import collectionReducer from './slices/collection';
import albumReducer from './slices/album';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['settings'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['isAuthenticated', 'apiKey'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  collection: collectionReducer,
  album: albumReducer,
});

export { rootPersistConfig, rootReducer };
