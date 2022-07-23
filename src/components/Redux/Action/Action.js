export const ADD = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}


export const DELETE = (id) => {
    return {
        type: 'DELETE_TO_CART',
        payload: id
    }
}