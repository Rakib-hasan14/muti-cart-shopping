const INIT_STATE = {
    cart: []
}

export const cartReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }
        case "DELETE_TO_CART": 
        const data = state.cart.filter(item => item.id !== action.payload)
        return {
            ...state,
            cart: data
        }
        default :
            return state
    }
}