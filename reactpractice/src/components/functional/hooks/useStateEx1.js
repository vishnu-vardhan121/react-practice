import { useState } from "react"





const UseStateEx1= ()=>{
   const [counter,setCounter]=useState(0)

   const statechanger=(value)=>{
    
    switch (value){
        case "increase":
            setCounter(counter+1)
            break
        case "decrease":
            setCounter(counter-1)
            break
        case "reset":
            setCounter(0)
            break
        default:
            break
        }

   }

    return(
        <>
        <h2>useState example 1</h2>

        <h2> current count {counter}</h2>
        <button onClick={()=>{statechanger("increase")}}>increase</button>
        <button onClick={()=>{statechanger("decrease")}}>decrease</button>
        <button onClick={()=>{statechanger("reset")}}>reset</button>

        </>
    )
}

export default UseStateEx1

