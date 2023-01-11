import { legacy_createStore as createStore} from 'redux'

const reducerFn = (state = {counter: 0}, action) => {


    if(action.type === "reset"){
        return{counter: state.counter = 0}
    }
    if(action.type === "add"){
        return{counter: state.counter + 1}
    }
    if(action.type === "sub"){
        return{counter: state.counter - 1}
    }
    if(action.type === "addBy"){
        return{counter: state.counter + action.payload}
    }
    
    return state
};


const store = createStore(reducerFn)



export default store