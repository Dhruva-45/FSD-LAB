import React,{useState} from "react";
const Counter=()=>{
    const [Counter,setCounter]=useState(0);
    const incrementCounter=()=>{
        setCounter((prevCounter)=>prevCounter+1)
    };
    const decrementCounter=()=>{
        setCounter((prevCounter)=>prevCounter-1)
    };
    return(
    <>
    <button data-testid="increment" onClick={incrementCounter}>+</button>
    <p data-testid="Counter">{Counter}</p>
    <button data-testid="decrement" onClick={decrementCounter}>-</button>
    </>
    );
    };
    export default Counter;
