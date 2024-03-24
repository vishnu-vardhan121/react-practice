import { useState } from "react"





const UseStateEx3 =()=>{
    const [fruits,addFruits]=useState(["apple","mango","banana","graps"])

    const changelist=(value)=>{
        let newFruits=[...fruits]
        switch (value){
            case "add":
                newFruits.push("new Fruit")
                break
            case "del":
                newFruits.pop()
                break
            default :
            break

        }
         
         addFruits(newFruits)
    }
    return(
        <>
        <h1>Add Fruits</h1>
        <button onClick={()=>{changelist("add")}}>Add Fruite</button>
        <button onClick={()=>{changelist("del")}}>dellete Fruite</button>

        <ol>
        {
            fruits.map((EachFruite,index)=>{return(<li key={index}>{EachFruite}</li>)})
        }
        </ol>
        </>
    )
}

export default UseStateEx3
