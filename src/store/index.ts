import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer); // estado global iniciado []

export default store;
