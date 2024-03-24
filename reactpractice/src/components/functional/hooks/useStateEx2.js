import { useState } from "react"




const UseStateEx2 =()=>{
  const  [time,timeChange]=useState(100)

  const timerr=()=>{
    setInterval(()=>{
        timeChange(timer=>timer-1)},1000)
  }
    return(
        <>
        <h2>timer example</h2>
        <h2>time {time} sec</h2>
        <button onClick={timerr}>Start timer</button>
        </>
    )
}

export default UseStateEx2