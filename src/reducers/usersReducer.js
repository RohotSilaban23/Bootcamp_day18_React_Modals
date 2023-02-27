//mencek type data user saat dijalan oleh app
export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_USERS":
         return [...state, action.payload];
        default :
         return state;
    }
};