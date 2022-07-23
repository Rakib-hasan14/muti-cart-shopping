import { createStore } from "redux";
import rootReducered from "./components/Redux/Reducer/Main";


const store = createStore(
    rootReducered
)

export default store