import React from "react";

const Child  = (props) =>{
    return(
        <div >
            <h2>Child  {props.name} , {props.age}</h2>
        </div>
    );
};

export default Child;