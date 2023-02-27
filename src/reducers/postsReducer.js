//mencek type data Post saat dijalan oleh app
export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_POSTS":
         return action.payload;
        default :
         return state;
    }
};