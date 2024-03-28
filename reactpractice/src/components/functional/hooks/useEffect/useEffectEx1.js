import { useEffect, useState } from "react"




const UseEffectEx1 =()=>{
    const [count,stateChange]=useState(0)
    useEffect(()=>{
        document.title="count"+count
        console.log("UseEffect");
        
    },[count])
    
    return(
        <>
        <h1>UseEffect exampl 1 </h1>
        <h2>Dom manipulating </h2>
        <br />
        <h1>Count {count}</h1>
        <button onClick={()=>{stateChange(count+1)}}> add count</button>
        </>
    )
}

export default UseEffectEx1