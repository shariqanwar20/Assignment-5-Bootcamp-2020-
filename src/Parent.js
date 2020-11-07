import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = ({imgUrl}) => {
    return(
        <div>
            <h2>This Is CS50</h2>
            <h3>
                <Child />
            </h3>
            <h3>
                <Child2 />
            </h3>
            <img src={imgUrl} alt='Harvard logo'/>

        </div>
    )
}

export default Parent;