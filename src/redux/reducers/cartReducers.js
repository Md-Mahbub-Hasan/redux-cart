const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {cart: newCart};

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = action.cart.filter(item => item !== id);
            return {cart: remainingCart}

        default:
            return state;
    }
}
export default cartReducers;