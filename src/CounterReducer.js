// state is a value; action is an object
// action{
//     type : 'Increment',
//     value : ;
// }
const CounterReducer = (state, action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return state + action.val;
        case 'DECREMENT':
            return state - action.val;
        default:
            return;
    }
}

export default CounterReducer
