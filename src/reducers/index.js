//Here we can create only one rootReducer

import changeTheNumber from "./upDown";
import { combineReducers } from "redux";
//we import the reducer which is created in another file.
const allReducers = combineReducers({changeTheNumber})
//here we are combining reducers into a single object and passing it to redux store as an argument of configureStore function
export default  allReducers;
