

export const TotalItem = (cart) => {
    return cart.reduce((sum, product) => {
      return sum + product.quantity;
    }, 0); 
  }
  
  export const TotalPrice = (cart) => {
    return cart.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0); 
  }
  









const CartReducer = (state, action) =>{
    switch(action.type){
        case"Add":
        const existingProductIndex = state.findIndex(p => p.id === action.product.id);
        if (existingProductIndex >= 0) {
          state[existingProductIndex].quantity += 1;
          return [...state];
        }
        return [...state, { ...action.product, quantity: 1 }];

         case"remove":
         return state.filter(p=> p.id !==action.id)


          case"increase":
          const IndexI = state.findIndex(p=>p.id===action.id)
           state[IndexI].quantity +=1;
           return[...state]



           case"decrease":
           const IndexD = state.findIndex(p=>p.id===action.id)
           state[IndexD].quantity -=1;
   return[...state]

           default:
            return state;
    }
}
export default CartReducer;