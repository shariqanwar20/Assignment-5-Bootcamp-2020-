import React, { useContext } from 'react';
import CounterContext from './CounterContext'

const Child = () => {
    let counter = useContext(CounterContext);

    return(
        <div>
            This Is WD50: {counter[0]}
            <br />
            <button onClick={() => counter[1](counter[0] + 1)}>
                Increment
            </button>
            <button onClick={() => counter[1](counter[0] - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default Child;