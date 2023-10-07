const {createStore} = require("redux");

function countReducer(state=0,action){
    switch(action.type){
        case 'INCREMENT': console.log("Payload: " +action.payload);
        return state+1;
        case 'DECREMENT': return state-1;
        default: return state; 
    }
}

export const increment = () => ({type: "INCREMENT"});
export const decrement = () => ({type: "DECREMENT"});

export const store = createStore(countReducer);