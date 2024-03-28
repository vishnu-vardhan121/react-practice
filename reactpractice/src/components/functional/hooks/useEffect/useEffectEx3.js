import React, { useEffect, useState } from "react" 



const UseEffectEx3 =()=>{
    const [x,setX]=useState(null)
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            
            setX(event.offsetX)
     console.log(event.clientX,"x-axis")
     console.log(event.clientY,"y-axis")
        })
    })
    return(
        <React.Fragment>
            <h1>{x}</h1>
        </React.Fragment>
    )
}

export default UseEffectEx3