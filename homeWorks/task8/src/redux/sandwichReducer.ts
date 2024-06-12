import Action from "./sandwichActions"
const initialState ={
    totalPrice:0,
    totalOrder:"Sandwich : "
}

export default function sandwichReducer(state = initialState, action: Action){
    switch(action.type){
        case "addIngredient":
        return {totalOrder: state.totalOrder + action.payLoad.food,
            totalPrice: state.totalPrice + action.payLoad.price
        }
        case "clearOrder":
        return {totalOrder: "Sandwich : ",
            totalPrice: 0
        }
        default:
            return{totalOrder: state.totalOrder ,
                totalPrice: state.totalPrice}


    }
}