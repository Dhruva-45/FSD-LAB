import React,{ useState,useEffect } from 'react';

function CounterExample(){
    const [ count,setcount ] = useState(0);

    useEffect(() => {
        document.title =`you clicked ${count} times`;
    });

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setcount(count +1)}>
                Click me
            </button>
            </div>
    );
}
export default CounterExample;