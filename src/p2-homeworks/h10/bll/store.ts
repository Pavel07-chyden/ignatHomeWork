import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import { successReducer} from "../../h13/Request/Request";
import {loadingReducer} from "./loadingReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  loading: loadingReducer,
  someThemes: themeReducer,
  isReducer: successReducer

 });

 const store = createStore(reducers, applyMiddleware(thunk));

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

 //@ts-ignore
 window.store = store; // for dev
