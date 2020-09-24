import { CardItem } from "native-base"
import {combineReducers, createStore} from "redux"
import CartItems from "../reducers/CartItems"
import SavedItems from "../reducers/SavedItems"

export default store = createStore(combineReducers({

CartItems: CartItems,
SavedItems: SavedItems


})
    
    
    
    )