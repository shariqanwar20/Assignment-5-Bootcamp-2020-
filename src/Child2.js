import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1)
    return (
        <div>
            This is GD50: {state}
            <br />
            <button onClick={() => dispatch({type:'INCREMENT', val:2})}>
                Increment
            </button>
            <button onClick={() => dispatch({type:'DECREMENT', val:2})}>
                Decrement
            </button>
            {/* <button onClick={() => dispatch('DECREMENT')}>
                    Decrement
                </button> */}
        </div>
    )
}

export default Child2;

