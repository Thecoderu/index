import React from "react";
import Child from "./Child";

const Parent = () => {
    return(
        <div>
            <h1>  Parent  </h1>
            <Child name="Suhani" age={20}/>

        </div>
    );
};

export default Parent;