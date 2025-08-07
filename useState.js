import { useState } from "react";
function Name(){
    const[name,setName] = useState("VVP_CS_FSD");
    const changeName = () => {
        setName("Full stack development");

    };

    return(
        <div>
            <p>My name is {name} </p>
            <button onClick={changeName}>click me</button>
            </div>
    )
        
}
export default Name;
