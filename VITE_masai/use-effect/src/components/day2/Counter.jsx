import { useState } from "react";
const Counter = ()=>{
    let x=0

    return(
        <>
        <h1>Counter :{x}</h1>
        <button onClick={()=>{x++; console.log(x)}}></button>
        </>
    )
}