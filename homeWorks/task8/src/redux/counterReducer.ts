import Action from "./counterActions";

const initialState = {
    value:0
}

export default function counterReducer(state = initialState, action: Action){
    switch (action.type) {
        case "counter/minus":
            return {value: state.value - action.payload}
            
    
        case "counter/plus":
            return {value: state.value + action.payload}
        
        default:
            return{value: state.value}
    }
}

