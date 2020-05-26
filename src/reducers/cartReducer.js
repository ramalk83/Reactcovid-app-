const GROCERY=[
    {name:"Pasta" ,price: 5.24},
    {name:"Rice" ,price: 15},
    {name:"Tomato" ,price: 2},
    {name:"Milk" ,price: 4.34},
    {name:"Banana" ,price: 1.24},
    {name:"Apple" ,price: 3}
  ]

const cartReducer=(state,action)=>{

    if(state===undefined){
        return {
            available:GROCERY,
            cart:[]
        }
    }
    switch(action.type){
        case 'ADD_TO_CART':{
        const cart=[...state.cart,action.item]
         return{
             ...state,
             cart
         }
        }
        case 'REMOVE_CART':{
        const cart=[...state.cart]
        cart.splice(action.index,1)
            return{
                ...state,
                cart
            }
        }
        default:{
            return state;
            break;
        }
    }
}

//const store = createStore(cartReducer)
export default cartReducer